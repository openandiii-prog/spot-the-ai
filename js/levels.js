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
    real: "public/images/01-livingroom-real-v2.jpg",
    fake: "public/images/01-livingroom-fake-v4.jpg",
    diffs: [
      { label: "vase color", real: {x:42,y:51,r:6}, fake: {x:42,y:51,r:6} },
      { label: "candle added", real: {x:51,y:50,r:5}, fake: {x:51,y:50,r:5} },
      { label: "basket removed", real: {x:59,y:54,r:5}, fake: {x:59,y:54,r:5} },
      { label: "chair/bench color", real: {x:13,y:62,r:13}, fake: {x:13,y:62,r:13} },
      { label: "pouf color", real: {x:24,y:90,r:9}, fake: {x:24,y:90,r:9} }
    ]
  },
  {
    id: 2,
    name: "Cafe Corner",
    time: 58,
    real: "public/images/02-cafe-real.jpg",
    fake: "public/images/02-cafe-fake.jpg",
    diffs: [
      { label: "flowers in vase color", real: {x:77,y:53,r:9}, fake: {x:77,y:53,r:9} },
      { label: "ashtray replaced by espresso cup", real: {x:90,y:62,r:8}, fake: {x:90,y:62,r:8} },
      { label: "menu holder color", real: {x:78,y:38,r:7}, fake: {x:78,y:38,r:7} },
      { label: "tealight candle added", real: {x:41,y:64,r:6}, fake: {x:41,y:64,r:6} },
      { label: "tablecloth color", real: [{x:32,y:83,r:14},{x:11,y:54,r:9}], fake: [{x:32,y:83,r:14},{x:11,y:54,r:9}] }
    ]
  },
  {
    id: 3,
    name: "Kitchen Counter",
    time: 56,
    real: "public/images/03-kitchen-real.jpg",
    fake: "public/images/03-kitchen-fake.jpg",
    diffs: [
      { label: "microwave color", real: {x:45,y:44,r:12}, fake: {x:45,y:44,r:12} },
      { label: "plant pot color", real: {x:45,y:32,r:6}, fake: {x:45,y:32,r:6} },
      { label: "pot color", real: {x:95,y:47,r:8}, fake: {x:95,y:47,r:8} },
      { label: "recipe card holder removed", real: {x:23,y:46,r:7}, fake: {x:23,y:46,r:7} },
      { label: "apple added on foreground counter", real: {x:66,y:72,r:8}, fake: {x:66,y:72,r:8} }
    ]
  },
  {
    id: 4,
    name: "Backyard Patio",
    time: 54,
    real: "public/images/04-patio-real.jpg",
    fake: "public/images/04-patio-fake.jpg",
    diffs: [
      { label: "sofa pillow color", real: [{x:55,y:21,r:9},{x:73,y:23,r:9}], fake: [{x:55,y:21,r:9},{x:73,y:23,r:9}] },
      { label: "armchair pillow color", real: [{x:5,y:24,r:7},{x:94,y:43,r:7}], fake: [{x:5,y:24,r:7},{x:94,y:43,r:7}] },
      { label: "vase and orchid replaced by candle", real: {x:39,y:24,r:9}, fake: {x:40,y:25,r:9} },
      { label: "potted plant color", real: {x:22,y:23,r:8}, fake: {x:22,y:23,r:8} },
      { label: "blanket added on armchair", real: {x:80,y:54,r:11}, fake: {x:80,y:54,r:11} }
    ]
  },
  {
    id: 5,
    name: "Home Office",
    time: 52,
    real: "public/images/05-office-real.jpg",
    fake: "public/images/05-office-fake.jpg",
    diffs: [
      { label: "lamp shade color", real: {x:7,y:36,r:9}, fake: {x:7,y:36,r:9} },
      { label: "pen cup color", real: {x:13,y:66,r:6}, fake: {x:13,y:66,r:6} },
      { label: "headphones replaced by mug", real: {x:64,y:70,r:8}, fake: {x:64,y:70,r:8} },
      { label: "speaker color", real: {x:86,y:65,r:11}, fake: {x:86,y:65,r:11} },
      { label: "plant sprig color", real: {x:85,y:10,r:8}, fake: {x:85,y:10,r:8} }
    ]
  },
  {
    id: 6,
    name: "Beach Setup",
    time: 50,
    real: "public/images/06-beach-real.jpg",
    fake: "public/images/06-beach-fake.jpg",
    diffs: [
      { label: "umbrella canopy color", real: {x:43,y:17,r:16}, fake: {x:43,y:17,r:16} },
      { label: "chair fabric color", real: [{x:12,y:74,r:10},{x:50,y:74,r:10}], fake: [{x:12,y:74,r:10},{x:50,y:74,r:10}] },
      { label: "umbrella top cap color and shape", real: {x:33,y:10,r:6}, fake: {x:34,y:4,r:6} },
      { label: "cooler added in sand", real: {x:83,y:77,r:11}, fake: {x:83,y:77,r:11} },
      { label: "flip-flops added in sand", real: {x:78,y:92,r:8}, fake: {x:78,y:92,r:8} }
    ]
  },
  {
    id: 7,
    name: "Bedroom",
    time: 48,
    real: "public/images/07-bedroom-real.jpg",
    fake: "public/images/07-bedroom-fake.jpg",
    diffs: [
      { label: "table lamp color", real: {x:20,y:60,r:9}, fake: {x:20,y:60,r:9} },
      { label: "flip alarm clock casing color", real: {x:82,y:68,r:7}, fake: {x:82,y:68,r:7} },
      { label: "eyeglasses removed", real: {x:32,y:72,r:6}, fake: {x:32,y:72,r:6} },
      { label: "pencil cup color", real: {x:50,y:66,r:6}, fake: {x:50,y:66,r:6} },
      { label: "framed picture added above desk", real: {x:50,y:23,r:10}, fake: {x:50,y:23,r:10} }
    ]
  },
  {
    id: 8,
    name: "Bathroom Counter",
    time: 46,
    real: "public/images/08-bathroom-real.jpg",
    fake: "public/images/08-bathroom-fake.jpg",
    diffs: [
      { label: "faucet color", real: {x:49,y:68,r:6}, fake: {x:49,y:68,r:6} },
      { label: "accessory box color", real: {x:77,y:73,r:7}, fake: {x:77,y:73,r:7} },
      { label: "tissue box holders removed", real: {x:10,y:71,r:10}, fake: {x:10,y:71,r:10} },
      { label: "hand towel added on towel bar", real: {x:93,y:35,r:9}, fake: {x:93,y:35,r:9} },
      { label: "succulent added on counter", real: {x:91,y:71,r:6}, fake: {x:91,y:71,r:6} }
    ]
  },
  {
    id: 9,
    name: "Garage Workshop",
    time: 44,
    real: "public/images/09-garage-real.jpg",
    fake: "public/images/09-garage-fake.jpg",
    diffs: [
      { label: "step ladder color", real: {x:82,y:53,r:10}, fake: {x:82,y:53,r:10} },
      { label: "fire extinguisher added", real: {x:36,y:54,r:6}, fake: {x:36,y:54,r:6} },
      { label: "pedestal fan color", real: {x:41,y:61,r:8}, fake: {x:41,y:61,r:8} },
      { label: "pet bowl removed", real: {x:93,y:67,r:6}, fake: {x:93,y:67,r:6} },
      { label: "storage totes color on top shelf", real: {x:60,y:34,r:9}, fake: {x:60,y:34,r:9} }
    ]
  },
  {
    id: 10,
    name: "Home Gym",
    time: 42,
    real: "public/images/10-gym-real.jpg",
    fake: "public/images/10-gym-fake.jpg",
    diffs: [
      { label: "bench pad color", real: {x:55,y:63,r:11}, fake: {x:55,y:63,r:11} },
      { label: "exercise mat color", real: {x:30,y:88,r:15}, fake: {x:30,y:88,r:15} },
      { label: "chandelier frame color", real: {x:37,y:8,r:9}, fake: {x:37,y:8,r:9} },
      { label: "dumbbells removed", real: {x:12,y:78,r:9}, fake: {x:12,y:78,r:9} },
      { label: "water bottle added on bench", real: {x:73,y:70,r:6}, fake: {x:73,y:70,r:6} }
    ]
  },
  {
    id: 11,
    name: "Library Reading Nook",
    time: 40,
    real: "public/images/11-library-real.jpg",
    fake: "public/images/11-library-fake.jpg",
    diffs: [
      { label: "armchair color", real: {x:64,y:72,r:15}, fake: {x:64,y:72,r:15} },
      { label: "throw pillow color", real: {x:57,y:61,r:8}, fake: {x:57,y:61,r:8} },
      { label: "lampshade color", real: {x:23,y:55,r:8}, fake: {x:23,y:55,r:8} },
      { label: "book removed from side table", real: {x:23,y:72,r:6}, fake: {x:23,y:72,r:6} },
      { label: "art print added in empty frame", real: {x:60,y:26,r:11}, fake: {x:60,y:26,r:11} }
    ]
  },
  {
    id: 12,
    name: "Restaurant Table Setting",
    time: 38,
    real: "public/images/12-restaurant-real.jpg",
    fake: "public/images/12-restaurant-fake.jpg",
    diffs: [
      { label: "napkin color", real: {x:83,y:76,r:10}, fake: {x:83,y:76,r:10} },
      { label: "candle removed", real: {x:55,y:58,r:7}, fake: {x:55,y:58,r:7} },
      { label: "wine added to glasses", real: [{x:4,y:50,r:10},{x:54,y:47,r:8},{x:93,y:38,r:8}], fake: [{x:4,y:50,r:10},{x:54,y:47,r:8},{x:93,y:38,r:8}] },
      { label: "flower color", real: {x:70,y:20,r:15}, fake: {x:70,y:20,r:15} },
      { label: "lemon wedge added", real: {x:57,y:88,r:7}, fake: {x:57,y:88,r:7} }
    ]
  },
  {
    id: 13,
    name: "Park Bench",
    time: 36,
    real: "public/images/13-parkbench-real.jpg",
    fake: "public/images/13-parkbench-fake.jpg",
    diffs: [
      { label: "bench color", real: {x:73,y:56,r:16}, fake: {x:73,y:56,r:16} },
      { label: "lamppost color", real: {x:33,y:18,r:10}, fake: {x:33,y:18,r:10} },
      { label: "bird added", real: {x:75,y:38,r:6}, fake: {x:75,y:38,r:6} },
      { label: "coffee cup added", real: {x:78,y:61,r:6}, fake: {x:78,y:61,r:6} },
      { label: "bag added", real: {x:86,y:79,r:10}, fake: {x:86,y:79,r:10} }
    ]
  },
  {
    id: 14,
    name: "Pool Deck",
    time: 34,
    real: "public/images/14-pooldeck-real.jpg",
    fake: "public/images/14-pooldeck-fake.jpg",
    diffs: [
      { label: "umbrella color", real: [{x:15,y:35,r:13},{x:55,y:33,r:14},{x:92,y:34,r:12}], fake: [{x:15,y:35,r:13},{x:55,y:33,r:14},{x:92,y:34,r:12}] },
      { label: "towel added", real: {x:7,y:50,r:9}, fake: {x:7,y:50,r:9} },
      { label: "sunglasses added", real: {x:52,y:62,r:6}, fake: {x:52,y:62,r:6} },
      { label: "book added", real: {x:78,y:64,r:7}, fake: {x:78,y:64,r:7} },
      { label: "beach ball added", real: {x:86,y:87,r:12}, fake: {x:86,y:87,r:12} }
    ]
  },
  {
    id: 15,
    name: "Garden Potting Bench",
    time: 32,
    real: "public/images/15-gardenshed-real.jpg",
    fake: "public/images/15-gardenshed-fake.jpg",
    diffs: [
      { label: "watering can color", real: {x:15,y:82,r:15}, fake: {x:15,y:82,r:15} },
      { label: "pot color", real: [{x:33,y:72,r:16},{x:86,y:70,r:15}], fake: [{x:33,y:72,r:16},{x:86,y:70,r:15}] },
      { label: "lantern color", real: {x:70,y:32,r:13}, fake: {x:70,y:32,r:13} },
      { label: "trowel added", real: {x:39,y:88,r:9}, fake: {x:39,y:88,r:9} },
      { label: "gloves added", real: {x:83,y:87,r:10}, fake: {x:83,y:87,r:10} }
    ]
  },
  {
    id: 16,
    name: "Laundry Room",
    time: 30,
    real: "public/images/16-laundry-real.jpg",
    fake: "public/images/16-laundry-fake.jpg",
    diffs: [
      { label: "flamingo color", real: {x:46,y:27,r:6}, fake: {x:46,y:27,r:6} },
      { label: "sink legs color", real: {x:62,y:75,r:10}, fake: {x:62,y:75,r:10} },
      { label: "blanket color", real: {x:43,y:64,r:6}, fake: {x:43,y:64,r:6} },
      { label: "keypad removed", real: {x:81,y:25,r:5}, fake: {x:81,y:25,r:5} },
      { label: "candle added", real: {x:44,y:45,r:5}, fake: {x:44,y:45,r:5} }
    ]
  },
  {
    id: 17,
    name: "Nursery Room",
    time: 28,
    real: "public/images/17-nursery-real.jpg",
    fake: "public/images/17-nursery-fake.jpg",
    diffs: [
      { label: "piggy bank color", real: {x:63,y:46,r:6}, fake: {x:63,y:47,r:6} },
      { label: "floor lamp shade color", real: {x:91,y:19,r:9}, fake: {x:91,y:19,r:9} },
      { label: "storage bins color", real: [{x:58,y:76,r:10},{x:72,y:76,r:10}], fake: [{x:59,y:70,r:10},{x:73,y:70,r:10}] },
      { label: "teddy bear removed from armchair", real: {x:91,y:56,r:8}, fake: {x:91,y:56,r:8} },
      { label: "shelf teddy bears now a bunny plush", real: {x:73,y:46,r:9}, fake: {x:72,y:46,r:9} }
    ]
  },
  {
    id: 18,
    name: "Dining Room",
    time: 26,
    real: "public/images/18-diningroom-real.jpg",
    fake: "public/images/18-diningroom-fake.jpg",
    diffs: [
      { label: "plant pot color", real: {x:63,y:44,r:8}, fake: {x:41,y:40,r:8} },
      { label: "front chairs color", real: [{x:18,y:55,r:10},{x:41,y:55,r:10}], fake: [{x:15,y:57,r:10},{x:42,y:55,r:10}] },
      { label: "magazine removed", real: {x:54,y:47,r:8}, fake: {x:54,y:47,r:8} },
      { label: "candle added on table", real: {x:60,y:42,r:7}, fake: {x:60,y:42,r:7} },
      { label: "wall bag removed", real: {x:35,y:41,r:6}, fake: {x:35,y:41,r:6} }
    ]
  },
  {
    id: 19,
    name: "Art Studio Desk",
    time: 25,
    real: "public/images/19-artstudio-real.jpg",
    fake: "public/images/19-artstudio-fake.jpg",
    diffs: [
      { label: "stool color", real: {x:54,y:70,r:12}, fake: {x:57,y:80,r:10} },
      { label: "paintbrush jar color", real: {x:61,y:43,r:5}, fake: {x:64,y:44,r:5} },
      { label: "amber bottle removed", real: {x:80,y:44,r:6}, fake: {x:80,y:44,r:6} },
      { label: "small vase color", real: {x:95,y:44,r:6}, fake: {x:94,y:43,r:6} },
      { label: "candle added on stool", real: {x:59,y:58,r:7}, fake: {x:59,y:58,r:7} }
    ]
  },
  {
    id: 20,
    name: "Campsite",
    time: 25,
    real: "public/images/20-camping-real.jpg",
    fake: "public/images/20-camping-fake.jpg",
    diffs: [
      { label: "tent awning color", real: {x:24,y:19,r:14}, fake: {x:24,y:19,r:14} },
      { label: "lantern removed", real: {x:58,y:43,r:6}, fake: {x:58,y:43,r:6} },
      { label: "hiking boots added", real: {x:18,y:77,r:8}, fake: {x:18,y:77,r:8} },
      { label: "bunting flags color", real: {x:55,y:4,r:6}, fake: {x:55,y:4,r:6} },
      { label: "hanging pots color", real: {x:80,y:58,r:13}, fake: {x:80,y:58,r:13} }
    ]
  },
  {
    id: 21,
    name: "Ski Lodge Fireplace",
    time: 25,
    real: "public/images/21-skilodge-real.jpg",
    fake: "public/images/21-skilodge-fake.jpg",
    diffs: [
      { label: "ribbed vase color", real: {x:26,y:20,r:9}, fake: {x:26,y:20,r:9} },
      { label: "candlesticks color", real: [{x:74,y:29,r:6},{x:80,y:28,r:6}], fake: [{x:75,y:30,r:6},{x:81,y:29,r:6}] },
      { label: "throw pillow color", real: {x:5,y:93,r:8}, fake: {x:5,y:95,r:7} },
      { label: "framed photo added", real: {x:38,y:28,r:7}, fake: {x:38,y:28,r:7} },
      { label: "wood vase color", real: {x:88,y:59,r:10}, fake: {x:88,y:59,r:10} }
    ]
  },
  {
    id: 22,
    name: "Boat Deck",
    time: 25,
    real: "public/images/22-boatdeck-real.jpg",
    fake: "public/images/22-boatdeck-fake.jpg",
    diffs: [
      { label: "console dash trim color", real: {x:45,y:26,r:14}, fake: {x:40,y:24,r:17} },
      { label: "sticker removed from console", real: {x:54,y:16,r:4}, fake: {x:63,y:15,r:4} },
      { label: "boat seat color", real: {x:87,y:59,r:11}, fake: {x:87,y:65,r:13} },
      { label: "cushion added on bench", real: {x:8,y:78,r:10}, fake: {x:9,y:78,r:10} },
      { label: "throttle lever tip color", real: {x:64,y:30,r:4}, fake: {x:73,y:29,r:4} }
    ]
  },
  {
    id: 23,
    name: "Rooftop Bar",
    time: 25,
    real: "public/images/23-rooftopbar-real.jpg",
    fake: "public/images/23-rooftopbar-fake.jpg",
    diffs: [
      { label: "pendant lamp shade color", real: {x:27,y:12,r:9}, fake: {x:27,y:11,r:9} },
      { label: "napkin color", real: [{x:20,y:80,r:7},{x:45,y:90,r:7}], fake: [{x:20,y:80,r:7},{x:45,y:90,r:7}] },
      { label: "small vase added on back table", real: {x:31,y:69,r:5}, fake: {x:31,y:69,r:5} },
      { label: "plant pot color", real: {x:52,y:76,r:9}, fake: {x:52,y:76,r:9} },
      { label: "glassware removed from front table", real: {x:60,y:84,r:8}, fake: {x:60,y:84,r:8} }
    ]
  },
  {
    id: 24,
    name: "Farmers Market Stall",
    time: 25,
    real: "public/images/24-farmersmarket-real.jpg",
    fake: "public/images/24-farmersmarket-fake.jpg",
    diffs: [
      { label: "cauliflower color", real: {x:29,y:38,r:11}, fake: {x:29,y:38,r:11} },
      { label: "cabbage changed to melon", real: {x:58,y:48,r:12}, fake: {x:58,y:48,r:12} },
      { label: "cantaloupe rind color", real: {x:85,y:15,r:14}, fake: {x:85,y:15,r:14} },
      { label: "green beans removed near potatoes", real: {x:68,y:13,r:6}, fake: {x:68,y:13,r:6} },
      { label: "radishes added near garlic", real: {x:56,y:90,r:7}, fake: {x:56,y:90,r:7} }
    ]
  },
  {
    id: 25,
    name: "Music Studio Corner",
    time: 25,
    real: "public/images/25-musicstudio-real.jpg",
    fake: "public/images/25-musicstudio-fake.jpg",
    diffs: [
      { label: "studio monitor speaker color", real: {x:24,y:35,r:11}, fake: {x:21,y:33,r:11} },
      { label: "headphones color", real: {x:60,y:85,r:10}, fake: {x:53,y:85,r:11} },
      { label: "succulent plant added on desk", real: {x:8,y:52,r:6}, fake: {x:7,y:52,r:6} },
      { label: "keyboard chassis color", real: {x:50,y:60,r:16}, fake: {x:48,y:63,r:16} },
      { label: "audio interface box removed", real: {x:94,y:85,r:8}, fake: {x:92,y:88,r:8} }
    ]
  },
  {
    id: 26,
    name: "Coffee Shop Counter",
    time: 25,
    real: "public/images/26-coffeeshop-real.jpg",
    fake: "public/images/26-coffeeshop-fake.jpg",
    diffs: [
      { label: "pear dessert body color", real: [{x:55,y:42,r:10},{x:83,y:38,r:9}], fake: [{x:38,y:38,r:11},{x:73,y:32,r:10}] },
      { label: "pear dessert topper", real: [{x:55,y:20,r:5},{x:83,y:16,r:5}], fake: [{x:38,y:13,r:5},{x:73,y:11,r:5}] },
      { label: "chocolate tag color", real: {x:47,y:66,r:6}, fake: {x:23,y:60,r:6} },
      { label: "silver fork added on shelf", real: {x:70,y:96,r:6}, fake: {x:73,y:93,r:6} },
      { label: "berry topping color", real: [{x:35,y:82,r:6},{x:58,y:75,r:6}], fake: [{x:38,y:78,r:6},{x:57,y:71,r:6}] }
    ]
  }
];
