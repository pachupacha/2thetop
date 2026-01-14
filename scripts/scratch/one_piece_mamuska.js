const deepComplexData = [
  {
    universe: 'Manga',
    worlds: [
      {
        name: 'East Blue',
        regions: [
          {
            islands: [
              {
                name: 'Fuchsia',
                landmarks: [
                  {
                    name: 'Baratie',
                    info: {
                      owner: 'Zeff',
                      specialty: ['Seafood', 'Training'],
                      hidden: [
                        [
                          {
                            note: 'Beginner pirate training',
                            treasures: [
                              {
                                chest: [
                                  { key: 'gold_coin' },
                                  { key: 'map_piece' },
                                  [
                                    {
                                      secret: {
                                        message: 'ONE PIECE', // ✅ objetivo
                                      },
                                    },
                                  ],
                                ],
                              },
                            ],
                          },
                        ],
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Grand Line',
        regions: [
          {
            islands: [
              {
                name: 'Sabaody',
                landmarks: [{ name: 'Human Auction', info: { owner: 'Tenryuubito' } }],
              },
              {
                name: 'Fishman Island',
                landmarks: [
                  {
                    name: 'Royal Palace',
                    info: {
                      king: 'Neptune',
                      defense: [
                        {
                          guards: ['Sharks', 'Mermaids'],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    universe: 'Anime',
    worlds: [
      {
        name: 'Marineford',
        regions: [
          {
            islands: [
              {
                name: 'Naval Base',
                landmarks: [
                  {
                    name: 'Admiral Quarters',
                    info: {
                      admirals: [
                        {
                          name: 'Akainu',
                          specialty: ['Justice', 'Fire'],
                        },
                        {
                          name: 'Kizaru',
                          specialty: ['Speed', 'Light'],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    universe: 'Mythical',
    worlds: [
      {
        name: 'Sky Islands',
        regions: [
          {
            islands: [
              {
                name: 'Upper Yard',
                landmarks: [
                  {
                    name: 'Ancient Ruins',
                    info: {
                      guardians: [
                        {
                          type: 'Giant',
                          abilities: ['Strength', 'Flight'],
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

//prettier-ignore
console.log(deepComplexData[0].worlds[0].regions[0].islands[0].landmarks[0].info.hidden[0][0].treasures[0].chest[2][0].secret.message)
