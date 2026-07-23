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
  }
];
