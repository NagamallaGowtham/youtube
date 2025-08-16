import home from '../assets/home-icon.svg'
import shorts from '../assets/shorts-icon.svg'
import subscriptions from '../assets/subscriptions-icon.svg'
import history from '../assets/history-icon.svg'
import playlists from '../assets/playlists-icon.svg'
import yourvideos from '../assets/your-videos-icon.svg'
import watchlater from '../assets/watch-later-icon.svg'
import likedvideos from '../assets/liked-videos-icon.svg'

export const sidebarItems = {
  "sidebar": [
    {
      "id": "home",
      "label": "Home",
      "icon": home,
      "route": "/",
      "isActive": false,
      "tooltip": "Go to Home",
      "meta": {
        "requiresAuth": false,
        "visible": true
      }
    },
    {
      "id": "shorts",
      "label": "Shorts",
      "icon": shorts,
      "route": "/shorts",
      "isActive": false,
      "tooltip": "Watch Shorts",
      "meta": {
        "requiresAuth": false,
        "visible": true
      }
    },
    {
      "id": "subscriptions",
      "label": "Subscriptions",
      "icon": subscriptions,
      "route": "/feed/subscriptions",
      "isActive": false,
      "tooltip": "View Subscriptions",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    },
    {
      "id": "history",
      "label": "History",
      "icon": history,
      "route": "/feed/history",
      "isActive": false,
      "tooltip": "Watch History",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    },
    {
      "id": "playlists",
      "label": "Playlists",
      "icon": playlists,
      "route": "/playlists",
      "isActive": false,
      "tooltip": "Your Playlists",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    },
    {
      "id": "your_videos",
      "label": "Your Videos",
      "icon": yourvideos,
      "route": "/your_videos",
      "isActive": false,
      "tooltip": "Your Videos",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    },
    {
      "id": "watch_later",
      "label": "Watch Later",
      "icon": watchlater,
      "route": "/playlist?list=WL",
      "isActive": false,
      "tooltip": "Saved for Later",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    },
    {
      "id": "liked_videos",
      "label": "Liked Videos",
      "icon": likedvideos,
      "route": "/playlist?list=LL",
      "isActive": false,
      "tooltip": "Videos You Liked",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    }
  ]
}

export const sidebarItemsShort = {
  "sidebar": [
    {
      "id": "home",
      "label": "Home",
      "icon": home,
      "route": "/",
      "isActive": false,
      "tooltip": "Go to Home",
      "meta": {
        "requiresAuth": false,
        "visible": true
      }
    },
    {
      "id": "shorts",
      "label": "Shorts",
      "icon": shorts,
      "route": "/shorts",
      "isActive": false,
      "tooltip": "Watch Shorts",
      "meta": {
        "requiresAuth": false,
        "visible": true
      }
    },
    {
      "id": "subscriptions",
      "label": "Subscriptions",
      "icon": subscriptions,
      "route": "/subscriptions",
      "isActive": false,
      "tooltip": "View Subscriptions",
      "meta": {
        "requiresAuth": true,
        "visible": true
      }
    }
  ]
}