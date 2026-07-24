/* ============================================================
   SPOT THE AI — level data
   Coordinates are percentages (0-100) of the square image.
   A diff's real/fake field is either {x,y,r} or an array of them
   (used when the AI edit touched two symmetric objects).
   ============================================================ */
window.LEVELS = [
  {
    id: 1,
    name: "Living Room",
    time: 60,
    real: "public/images/01-livingroom-real.png",
    fake: "public/images/01-livingroom-fake-v2.jpg",
    diffs: [
      {
        label: "pillow color",
        real: [{x:36,y:51,r:9},{x:63,y:51,r:9}],
        fake: [{x:36,y:51,r:9},{x:63,y:51,r:9}]
      },
      {
        label: "mug color",
        real: {x:39,y:60,r:6},
        fake: {x:39,y:60,r:6}
      },
      {
        label: "art print colors",
        real: {x:40,y:25,r:8},
        fake: {x:40,y:25,r:8}
      },
      {
        label: "plant added on media console",
        real: {x:85,y:52,r:6},
        fake: {x:85,y:52,r:6}
      },
      {
        label: "lamp shade color",
        real: {x:82,y:30,r:7},
        fake: {x:82,y:30,r:7}
      }
    ]
  },
  {
    id: 2,
    name: "Cafe Corner",
    time: 55,
    real: "public/images/02-cafe-real.jpg",
    fake: "public/images/02-cafe-fake.jpg",
    diffs: [
      {
        label: "bicycle color",
        real: {x:83,y:63,r:9},
        fake: {x:82,y:62,r:9}
      },
      {
        label: "umbrella stripe color",
        real: {x:20,y:29,r:9},
        fake: {x:19,y:29,r:9}
      },
      {
        label: "missing pigeon",
        real: [{x:34,y:91,r:8},{x:66,y:90,r:8}],
        fake: [{x:34,y:88,r:11},{x:66,y:88,r:11}]
      },
      {
        label: "car color",
        real: {x:92,y:58,r:9},
        fake: {x:92,y:55,r:9}
      },
      {
        label: "plant added on table",
        real: {x:47,y:63,r:7},
        fake: {x:45,y:59,r:7}
      }
    ]
  },
  {
    id: 3,
    name: "Kitchen Counter",
    time: 50,
    real: "public/images/03-kitchen-real.jpg",
    fake: "public/images/03-kitchen-fake.jpg",
    diffs: [
      { label: "clock frame color", real: {x:39,y:6,r:9}, fake: {x:39,y:6,r:9} },
      { label: "apple color", real: {x:19,y:57,r:9}, fake: {x:19,y:57,r:9} },
      { label: "mug color", real: {x:36,y:71,r:7}, fake: {x:36,y:71,r:7} },
      { label: "knife removed", real: {x:82,y:84,r:9}, fake: {x:82,y:84,r:9} },
      { label: "toaster color", real: {x:68,y:59,r:12}, fake: {x:68,y:59,r:12} }
    ]
  },
  {
    id: 4,
    name: "Backyard Patio",
    time: 45,
    real: "public/images/04-patio-real.png",
    fake: "public/images/04-patio-fake-v2.jpg",
    diffs: [
      { label: "flower color", real: {x:48,y:47,r:9}, fake: {x:48,y:47,r:9} },
      { label: "lantern removed", real: {x:42,y:60,r:8}, fake: {x:42,y:60,r:8} },
      { label: "dog bed color", real: {x:19,y:60,r:10}, fake: {x:19,y:60,r:10} },
      { label: "grill color", real: {x:83,y:51,r:11}, fake: {x:83,y:51,r:11} },
      { label: "fence color", real: {x:24,y:23,r:14}, fake: {x:24,y:23,r:14} }
    ]
  },
  {
    id: 5,
    name: "Home Office",
    time: 40,
    real: "public/images/05-office-real.png",
    fake: "public/images/05-office-fake.jpg",
    diffs: [
      { label: "monitor screen color", real: {x:74,y:37,r:11}, fake: {x:74,y:37,r:11} },
      { label: "mug color", real: {x:79,y:73,r:6}, fake: {x:79,y:73,r:6} },
      { label: "succulent removed", real: {x:46,y:43,r:6}, fake: {x:46,y:43,r:6} },
      { label: "lamp color", real: {x:29,y:22,r:7}, fake: {x:29,y:22,r:7} },
      { label: "extra pen added", real: {x:58,y:79,r:7}, fake: {x:58,y:79,r:7} }
    ]
  },
  {
    id: 6,
    name: "Beach Setup",
    time: 35,
    real: "public/images/06-beach-real.png",
    fake: "public/images/06-beach-fake.jpg",
    diffs: [
      { label: "umbrella stripe color", real: {x:49,y:18,r:13}, fake: {x:49,y:18,r:13} },
      { label: "cooler color", real: {x:77,y:60,r:9}, fake: {x:77,y:60,r:9} },
      { label: "sunglasses removed", real: {x:37,y:71,r:7}, fake: {x:37,y:71,r:7} },
      { label: "flip-flops color", real: {x:22,y:85,r:9}, fake: {x:22,y:85,r:9} },
      { label: "extra seashell added", real: {x:81,y:85,r:10}, fake: {x:81,y:85,r:10} }
    ]
  },
  {
    id: 7,
    name: "Bedroom",
    time: 33,
    real: "public/images/07-bedroom-real.jpg",
    fake: "public/images/07-bedroom-fake.jpg",
    diffs: [
      { label: "pillow color", real: {x:60,y:40,r:9}, fake: {x:60,y:40,r:9} },
      { label: "alarm clock color", real: {x:23,y:46,r:6}, fake: {x:23,y:45,r:6} },
      { label: "throw blanket color", real: {x:58,y:68,r:12}, fake: {x:70,y:58,r:13} },
      { label: "lamp shade color", real: {x:13,y:28,r:7}, fake: {x:12,y:27,r:7} },
      { label: "plant added on nightstand", real: {x:16,y:45,r:6}, fake: {x:16,y:45,r:6} }
    ]
  },
  {
    id: 8,
    name: "Bathroom Counter",
    time: 32,
    real: "public/images/08-bathroom-real.png",
    fake: "public/images/08-bathroom-fake.jpg",
    diffs: [
      { label: "soap dispenser color", real: {x:14,y:52,r:8}, fake: {x:14,y:52,r:8} },
      { label: "hand towel color", real: {x:87,y:70,r:9}, fake: {x:87,y:70,r:9} },
      { label: "candle removed", real: {x:90,y:56,r:8}, fake: {x:90,y:56,r:8} },
      { label: "faucet color", real: {x:46,y:55,r:7}, fake: {x:46,y:55,r:7} },
      { label: "plant added beside sink", real: {x:72,y:58,r:7}, fake: {x:72,y:58,r:7} }
    ]
  },
  {
    id: 9,
    name: "Garage Workshop",
    time: 31,
    real: "public/images/09-garage-real.png",
    fake: "public/images/09-garage-fake.jpg",
    diffs: [
      { label: "toolbox color", real: {x:44,y:48,r:10}, fake: {x:44,y:48,r:10} },
      { label: "bicycle color", real: {x:90,y:64,r:13}, fake: {x:90,y:64,r:13} },
      { label: "hammer removed from pegboard", real: {x:21,y:29,r:8}, fake: {x:21,y:29,r:8} },
      { label: "storage bin color", real: {x:41,y:74,r:13}, fake: {x:41,y:74,r:13} },
      { label: "fire extinguisher added", real: {x:71,y:44,r:7}, fake: {x:71,y:44,r:7} }
    ]
  },
  {
    id: 10,
    name: "Home Gym",
    time: 30,
    real: "public/images/10-gym-real.png",
    fake: "public/images/10-gym-fake.jpg",
    diffs: [
      { label: "yoga mat color", real: {x:78,y:52,r:12}, fake: {x:76,y:52,r:12} },
      { label: "water bottle color", real: {x:57,y:63,r:7}, fake: {x:56,y:63,r:7} },
      { label: "dumbbell color", real: {x:35,y:76,r:13}, fake: {x:35,y:76,r:13} },
      { label: "resistance bands removed", real: {x:13,y:15,r:9}, fake: {x:13,y:15,r:9} },
      { label: "plant added in corner", real: {x:10,y:68,r:11}, fake: {x:10,y:68,r:11} }
    ]
  },
  {
    id: 11,
    name: "Library Reading Nook",
    time: 29,
    real: "public/images/11-library-real.png",
    fake: "public/images/11-library-fake.jpg",
    diffs: [
      { label: "armchair color", real: {x:48,y:70,r:12}, fake: {x:48,y:70,r:12} },
      { label: "mug color", real: {x:25,y:62,r:6}, fake: {x:25,y:62,r:6} },
      { label: "reading glasses removed", real: {x:33,y:66,r:6}, fake: {x:33,y:66,r:6} },
      { label: "lamp shade color", real: {x:58,y:18,r:10}, fake: {x:58,y:18,r:10} },
      { label: "blanket added on armchair", real: {x:82,y:60,r:14}, fake: {x:82,y:60,r:14} }
    ]
  },
  {
    id: 12,
    name: "Restaurant Table Setting",
    time: 28,
    real: "public/images/12-restaurant-real.png",
    fake: "public/images/12-restaurant-fake.jpg",
    diffs: [
      { label: "roses color", real: {x:60,y:23,r:9}, fake: {x:60,y:23,r:9} },
      { label: "napkin ring color", real: [{x:17,y:39,r:5},{x:83,y:39,r:5}], fake: [{x:17,y:39,r:5},{x:83,y:39,r:5}] },
      { label: "candle removed", real: {x:48,y:45,r:8}, fake: {x:48,y:45,r:8} },
      { label: "wine added to glass", real: {x:31,y:28,r:7}, fake: {x:31,y:28,r:7} },
      { label: "plate rim color", real: [{x:19,y:60,r:15},{x:81,y:60,r:15}], fake: [{x:19,y:60,r:15},{x:81,y:60,r:15}] }
    ]
  },
  {
    id: 13,
    name: "Park Bench",
    time: 27,
    real: "public/images/13-parkbench-real.jpg",
    fake: "public/images/13-parkbench-fake.jpg",
    diffs: [
      { label: "bench color", real: {x:18,y:52,r:13}, fake: {x:18,y:52,r:13} },
      { label: "bicycle color", real: {x:93,y:50,r:12}, fake: {x:93,y:50,r:12} },
      { label: "bird removed", real: [{x:50,y:62,r:6},{x:58,y:87,r:6}], fake: [{x:50,y:62,r:6},{x:58,y:87,r:6}] },
      { label: "trash bin color", real: {x:68,y:66,r:10}, fake: {x:68,y:66,r:10} },
      { label: "skateboard added", real: {x:43,y:72,r:11}, fake: {x:43,y:72,r:11} }
    ]
  },
  {
    id: 14,
    name: "Pool Deck",
    time: 26,
    real: "public/images/14-pooldeck-real.jpg",
    fake: "public/images/14-pooldeck-fake.jpg",
    diffs: [
      { label: "pool float color", real: {x:15,y:50,r:16}, fake: {x:15,y:50,r:16} },
      { label: "towel color", real: {x:70,y:40,r:8}, fake: {x:70,y:40,r:8} },
      { label: "sunglasses removed", real: {x:56,y:43,r:6}, fake: {x:56,y:43,r:6} },
      { label: "lounge chair stripe color", real: [{x:25,y:20,r:13},{x:75,y:60,r:14}], fake: [{x:25,y:20,r:13},{x:75,y:60,r:14}] },
      { label: "flip-flops added", real: {x:81,y:85,r:8}, fake: {x:81,y:85,r:8} }
    ]
  },
  {
    id: 15,
    name: "Garden Potting Bench",
    time: 25,
    real: "public/images/15-gardenshed-real.jpg",
    fake: "public/images/15-gardenshed-fake.jpg",
    diffs: [
      { label: "watering can color", real: {x:28,y:42,r:14}, fake: {x:29,y:42,r:14} },
      { label: "gardening gloves color", real: {x:78,y:74,r:9}, fake: {x:80,y:73,r:10} },
      { label: "trowel removed", real: {x:68,y:67,r:8}, fake: {x:68,y:67,r:8} },
      { label: "pot now has sprouting plant", real: {x:59,y:57,r:7}, fake: {x:59,y:53,r:7} },
      { label: "sunhat added on shed wall", real: {x:80,y:22,r:10}, fake: {x:80,y:22,r:10} }
    ]
  },
  {
    id: 16,
    name: "Laundry Room",
    time: 25,
    real: "public/images/16-laundry-real.png",
    fake: "public/images/16-laundry-fake.jpg",
    diffs: [
      { label: "detergent bottle color", real: {x:40,y:18,r:8}, fake: {x:40,y:18,r:8} },
      { label: "towel stack color", real: {x:72,y:39,r:8}, fake: {x:70,y:38,r:8} },
      { label: "hanging clothes removed", real: {x:92,y:30,r:14}, fake: {x:92,y:30,r:14} },
      { label: "laundry basket color", real: {x:25,y:78,r:14}, fake: {x:25,y:78,r:14} },
      { label: "potted plant added", real: {x:74,y:34,r:7}, fake: {x:74,y:34,r:7} }
    ]
  },
  {
    id: 17,
    name: "Nursery Room",
    time: 25,
    real: "public/images/17-nursery-real.png",
    fake: "public/images/17-nursery-fake.jpg",
    diffs: [
      { label: "crib sheet color", real: {x:37,y:68,r:12}, fake: {x:37,y:68,r:12} },
      { label: "teddy bear missing", real: {x:58,y:56,r:9}, fake: {x:58,y:56,r:9} },
      { label: "hanging mobile removed", real: {x:30,y:17,r:12}, fake: {x:30,y:17,r:12} },
      { label: "rocking chair color", real: {x:83,y:58,r:13}, fake: {x:83,y:58,r:13} },
      { label: "blanket added on changing table", real: {x:33,y:41,r:7}, fake: {x:33,y:41,r:7} }
    ]
  },
  {
    id: 18,
    name: "Dining Room",
    time: 25,
    real: "public/images/18-diningroom-real.png",
    fake: "public/images/18-diningroom-fake.jpg",
    diffs: [
      { label: "fruit color (oranges to lemons)", real: {x:50,y:54,r:8}, fake: {x:50,y:54,r:8} },
      { label: "chair color", real: [{x:19,y:80,r:11},{x:82,y:80,r:11}], fake: [{x:19,y:80,r:11},{x:82,y:80,r:11}] },
      { label: "placemat removed", real: {x:71,y:66,r:7}, fake: {x:71,y:66,r:7} },
      { label: "pendant light shade color", real: {x:51,y:11,r:8}, fake: {x:52,y:12,r:9} },
      { label: "vase of flowers added", real: {x:52,y:47,r:7}, fake: {x:52,y:47,r:7} }
    ]
  },
  {
    id: 19,
    name: "Art Studio Desk",
    time: 25,
    real: "public/images/19-artstudio-real.png",
    fake: "public/images/19-artstudio-fake.jpg",
    diffs: [
      { label: "palette board color", real: {x:40,y:80,r:12}, fake: {x:40,y:80,r:12} },
      { label: "fewer paintbrushes", real: {x:78,y:48,r:6}, fake: {x:62,y:47,r:6} },
      { label: "easel color", real: {x:36,y:52,r:9}, fake: {x:36,y:52,r:9} },
      { label: "sketchbook cover color", real: {x:90,y:58,r:8}, fake: {x:93,y:60,r:8} },
      { label: "succulent added", real: {x:68,y:40,r:9}, fake: {x:76,y:36,r:9} }
    ]
  },
  {
    id: 20,
    name: "Campsite",
    time: 25,
    real: "public/images/20-camping-real.png",
    fake: "public/images/20-camping-fake.jpg",
    diffs: [
      { label: "tent color", real: {x:62,y:45,r:14}, fake: {x:62,y:45,r:14} },
      { label: "cooler color", real: {x:77,y:67,r:7}, fake: {x:77,y:67,r:7} },
      { label: "lantern removed", real: {x:31,y:53,r:8}, fake: {x:31,y:53,r:8} },
      { label: "camp chair color", real: {x:93,y:63,r:8}, fake: {x:93,y:63,r:8} },
      { label: "hiking boots added", real: {x:27,y:76,r:9}, fake: {x:27,y:76,r:9} }
    ]
  },
  {
    id: 21,
    name: "Ski Lodge Fireplace",
    time: 25,
    real: "public/images/21-skilodge-real.png",
    fake: "public/images/21-skilodge-fake.jpg",
    diffs: [
      { label: "blanket color", real: {x:58,y:78,r:12}, fake: {x:58,y:78,r:12} },
      { label: "mug color", real: {x:77,y:73,r:6}, fake: {x:77,y:73,r:6} },
      { label: "snow boots removed", real: {x:82,y:89,r:8}, fake: {x:82,y:89,r:8} },
      { label: "armchair color", real: {x:94,y:44,r:9}, fake: {x:94,y:44,r:9} },
      { label: "string lights added", real: {x:42,y:15,r:14}, fake: {x:42,y:15,r:14} }
    ]
  },
  {
    id: 22,
    name: "Boat Deck",
    time: 25,
    real: "public/images/22-boatdeck-real.png",
    fake: "public/images/22-boatdeck-fake.jpg",
    diffs: [
      { label: "life ring color", real: {x:50,y:36,r:12}, fake: {x:50,y:36,r:12} },
      { label: "cooler color", real: {x:50,y:70,r:11}, fake: {x:50,y:70,r:11} },
      { label: "sunglasses removed", real: {x:69,y:52,r:6}, fake: {x:69,y:52,r:6} },
      { label: "deck chair color", real: [{x:20,y:36,r:10},{x:80,y:36,r:10}], fake: [{x:20,y:36,r:10},{x:80,y:36,r:10}] },
      { label: "nautical flag added", real: {x:48,y:15,r:6}, fake: {x:48,y:15,r:6} }
    ]
  },
  {
    id: 23,
    name: "Rooftop Bar",
    time: 25,
    real: "public/images/23-rooftopbar-real.png",
    fake: "public/images/23-rooftopbar-fake.jpg",
    diffs: [
      { label: "left cocktail color", real: {x:42,y:39,r:8}, fake: {x:41,y:40,r:8} },
      { label: "bar stool color", real: {x:21,y:62,r:10}, fake: {x:15,y:62,r:10} },
      { label: "table color", real: {x:50,y:68,r:13}, fake: {x:50,y:68,r:13} },
      { label: "right cocktail removed", real: {x:57,y:39,r:8}, fake: {x:54,y:38,r:8} },
      { label: "potted plant added", real: {x:80,y:87,r:8}, fake: {x:80,y:87,r:8} }
    ]
  },
  {
    id: 24,
    name: "Farmers Market Stall",
    time: 25,
    real: "public/images/24-farmersmarket-real.png",
    fake: "public/images/24-farmersmarket-fake.jpg",
    diffs: [
      { label: "tomato color", real: {x:26,y:55,r:13}, fake: {x:28,y:50,r:13} },
      { label: "apple color", real: {x:88,y:52,r:10}, fake: {x:87,y:48,r:10} },
      { label: "scale removed", real: {x:76,y:29,r:14}, fake: {x:76,y:29,r:14} },
      { label: "basket color", real: {x:88,y:68,r:11}, fake: {x:85,y:64,r:11} },
      { label: "carrots added", real: {x:68,y:75,r:11}, fake: {x:68,y:75,r:11} }
    ]
  },
  {
    id: 25,
    name: "Music Studio Corner",
    time: 25,
    real: "public/images/25-musicstudio-real.png",
    fake: "public/images/25-musicstudio-fake.jpg",
    diffs: [
      { label: "guitar color", real: {x:42,y:63,r:10}, fake: {x:42,y:63,r:10} },
      { label: "amplifier color", real: {x:68,y:62,r:11}, fake: {x:68,y:62,r:11} },
      { label: "headphones removed", real: {x:76,y:33,r:9}, fake: {x:76,y:33,r:9} },
      { label: "mic stand color", real: {x:16,y:65,r:9}, fake: {x:16,y:65,r:9} },
      { label: "potted plant added", real: {x:9,y:60,r:9}, fake: {x:9,y:60,r:9} }
    ]
  },
  {
    id: 26,
    name: "Coffee Shop Counter",
    time: 25,
    real: "public/images/26-coffeeshop-real.png",
    fake: "public/images/26-coffeeshop-fake.jpg",
    diffs: [
      { label: "coffee cup color", real: [{x:32,y:68,r:8},{x:68,y:68,r:8}], fake: [{x:29,y:67,r:8},{x:65,y:67,r:8}] },
      { label: "milk pitcher color", real: {x:47,y:60,r:7}, fake: {x:47,y:60,r:7} },
      { label: "coffee cup removed", real: {x:48,y:70,r:7}, fake: {x:48,y:70,r:7} },
      { label: "espresso machine color", real: {x:18,y:44,r:13}, fake: {x:18,y:42,r:13} },
      { label: "potted plant added", real: {x:60,y:58,r:7}, fake: {x:60,y:58,r:7} }
    ]
  }
];
