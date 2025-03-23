// Cache name (update this when files change to refresh the cache)
const CACHE_NAME = 'virtues-tracker-cache-v1';

// Files to cache
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Install event - cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  
  // Activate the new service worker immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cache
        if (response) {
          return response;
        }
        
        // Clone the request - request streams can only be used once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response - response streams can only be used once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        });
      })
  );
});

// Store for our notification timers
let morningNotificationTimer = null;
let eveningNotificationTimer = null;

// Listen for messages from the main app
self.addEventListener('message', event => {
  // Clear old notification timers
  if (morningNotificationTimer) {
    clearTimeout(morningNotificationTimer);
    morningNotificationTimer = null;
  }
  
  if (eveningNotificationTimer) {
    clearTimeout(eveningNotificationTimer);
    eveningNotificationTimer = null;
  }
  
  if (event.data.type === 'SCHEDULE_NOTIFICATIONS') {
    scheduleNotifications(event.data.data);
  } else if (event.data.type === 'CLEAR_NOTIFICATIONS') {
    // Notifications already cleared above
  }
});

// Schedule morning and evening notifications
function scheduleNotifications(data) {
  const { virtueName, virtueDesc } = data;
  
  // Schedule morning notification (7:00 AM)
  const morningTime = getTimeUntil(7, 0);
  morningNotificationTimer = setTimeout(() => {
    showNotification(
      `Today's Virtue: ${virtueName}`,
      `Focus on: ${virtueDesc} Start your day mindfully!`
    );
    
    // Schedule the next day's notification
    scheduleNotifications(data);
  }, morningTime);
  
  // Schedule evening notification (9:00 PM)
  const eveningTime = getTimeUntil(21, 0);
  eveningNotificationTimer = setTimeout(() => {
    showNotification(
      'Track Today\'s Progress',
      `How did you do with ${virtueName} today? Open the app to record your progress.`
    );
  }, eveningTime);
}

// Calculate milliseconds until the next occurrence of a specific time
function getTimeUntil(hour, minute) {
  const now = new Date();
  const target = new Date(now);
  
  target.setHours(hour, minute, 0, 0);
  
  // If the target time has already passed today, schedule for tomorrow
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }
  
  return target - now;
}

// Show a notification
function showNotification(title, body) {
  self.registration.showNotification(title, {
    body: body,
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-192x192.png',
    vibrate: [200, 100, 200],
    requireInteraction: false
  });
}

// Notification click event - open/focus the app
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({
      type: 'window'
    })
    .then(clientList => {
      // If a window client is already open, focus it
      for (const client of clientList) {
        if (client.url.includes('/index.html') && 'focus' in client) {
          return client.focus();
        }
      }
      
      // Otherwise, open a new window
      if (clients.openWindow) {
        return clients.openWindow('./');
      }
    })
  );
});