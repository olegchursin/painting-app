# NOTES

### Rake routes
api_v1_paintings GET    /api/v1/paintings(.:format)     api/v1/paintings#index
                 POST   /api/v1/paintings(.:format)     api/v1/paintings#create
 api_v1_painting GET    /api/v1/paintings/:id(.:format) api/v1/paintings#show
                 PATCH  /api/v1/paintings/:id(.:format) api/v1/paintings#update
                 PUT    /api/v1/paintings/:id(.:format) api/v1/paintings#update
                 DELETE /api/v1/paintings/:id(.:format) api/v1/paintings#destroy

### JSON sample
{
  "id": 1,
  "title": "Portrait of a Carthusian",
  "image": "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
  "slug": "petrus-christus-portrait-of-a-carthusian",
  "date": "1446",
  "dimensions": {
    "width": 8.5,
    "height": 11.5
  },
  "votes": 4,
  "artist": {
    "id": 1,
    "name": "Petrus Christus",
    "hometown": "Baarle-Hertog, Belgium",
    "birthday": "1410",
    "deathday": "1475"
  },
  "museum": {
    "id": 1,
    "name": "Unknown Museum"
  }
},
