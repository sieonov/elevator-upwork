export const elevatorParams = [
  '1. Car Doors Openings',
  '2. Explicit Fire Phase II Signal',
  '3. Fire Return Floor Signal',
  '4. Door Limits Signals in Inspection Mode',
  '5. RL2 (DCR) On-delay',
];

export const carDoorOpening = [
  '1: Single Opening, 1 CGS\nand 1 HDL',
  '2: Dual Opening, 1 CGS\nand 1 HDL',
  '3: Dual Opening, 2 CGS\nand 3 HDL Walkthrough',
  '4: Single Opening, 1 CGS\nand 2 HDL',
  '5: Dual Opening, 2 CGS\nand 2 HDL Walkthrough',
  '6: Dual Opening, 2 CGS\nand 2 HDL Staggered',
  '7: Dual Opening, 2 CGS,\n 2 HDL & GLC Walkthrough',
  '8:  Single Opening, 1 CGS,\nand 3 HDL',
]

export const inputParams = [
  'DFOF', 'DFCF', 'DFOR(Not used)', 'DFCR(Not used)', 'CGS1', 'HDL1', 'INS', 'GLC(Not used)', 'LEV(Not used)', 'FRF(Not used)', 'FSL', 'FSPII',
];

export const voltagesLevel = [
  12, 24, 48, 84, 120, 250
]

export const voltageTH = [
  '33% - 66%', '35% - 62%', '35% - 45%', '60% - 75%', '45% - 62%',
]

export const outputParams = [
  'RL1', 'RL2', 'RL3', 'RL4',
];

export const outputFunc = [
  '1. Disabled',
  '2. Car Motion Restricted\n(CMR)',
  '3. Door Closing Restricted\n(DCR)',
  '4. Front Door Fully Open\n(DFOF)',
  '5. Front Door Fully Closed\n(DFCF)',
  '6. Rear Door Fully Open\n(DFOR)',
  '7. Rear Door Fully Closed\n(DFCR)',
  '8. Car Gate Switch\n(CGS1)',
  '9. Hoistway Door Lock\n(HDL1)',
  '10. Device Error\n(DERR)',
  '11. Car Gate Switch and\n RL3 State (CGS1 & RL3)',
  '12. Native DLM Function 1\n (DLM1)',
  '13. Gate SW 1 & Gate SW 2\n(CGS1 & CGS2)',
  '14. Fire Return Floor\n(FRF)',
  '15. Fire Service Light\n(FSL)',
  '16. Fire Service Phase II\n(FSPII)',
  '17. Door Lock 1 & Door\nLock 2 (HDL1 & HDL2)',
  '18. CGS1 & CGS2 & RL3\n(CGS1 & CGS2 & RL3)',
  '19. CMR 3s Pulse\n(DCR 3SP)',
  '20. DCR 3s Pulse\n(CMR 3SP)',
  '21. DCR or CMR 3s Pulse\n(CMR||DCR 3SP)',
  '22. DFOR and CGS1\n(DFOR & CGS1)',
  '23. DCR and DFOF\n(DCR & DFOF)',
  '24. DCR and DFOR\n(DCR & DFOR)',
]
