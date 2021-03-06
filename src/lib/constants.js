export const elevatorParams = [
  '1. Car Doors Openings',
  '2. Explicit Fire Phase II Signal',
  '3. Fire Return Floor Signal',
  '4. Door Limits Signals in Inspection Mode',
  '5. RL2 (DCR) On-delay',
];

export const defaultElevatorConfig = {
  '1. Car Doors Openings': '1: Single Opening, 1 CGS and 1 HDL',
  '2. Explicit Fire Phase II Signal': 'Unused',
  '3. Fire Return Floor Signal': 'Unused',
  '4. Door Limits Signals in Inspection Mode': 'Valid',
  '5. RL2 (DCR) On-delay': '5 Seconds',
}

export const carDoorOpening = [
  '1: Single Opening, 1 CGS and 1 HDL',
  '2: Dual Opening, 1 CGS and 1 HDL',
  '3: Dual Opening, 2 CGS and 3 HDL Walkthrough',
  '4: Single Opening, 1 CGS and 2 HDL',
  '5: Dual Opening, 2 CGS and 2 HDL Walkthrough',
  '6: Dual Opening, 2 CGS and 2 HDL Staggered',
  '7: Dual Opening, 2 CGS, 2 HDL & GLC Walkthrough',
  '8:  Single Opening, 1 CGS, and 3 HDL',
];

export const inputParams = [
  'DFOF', 'DFCF', 'DFOR', 'DFCR', 'CGS1', 'HDL1', 'INS', 'GLC', 'LEV', 'FRF', 'FSL', 'FSPII',
];

export const defaultInputConfig = ['120V', '45% - 62%', 'Active High'];

export const voltagesLevel = [
  12, 24, 48, 84, 120, 250
]

export const voltageTH = ['33% - 66%', '35% - 62%', '35% - 45%', '60% - 75%', '45% - 62%'];

export const outputParams = ['RL1', 'RL2', 'RL3', 'RL4'];

export const defaultOutputConfig = {
  'RL1': ['2. Car Motion Restricted (CMR)', 'Active High'],
  'RL2': ['3. Door Closing Restricted (DCR)', 'Active High'],
  'RL3': ['1. Disabled', 'Active High'],
  'RL4': ['1. Disabled', 'Active High'],
};

export const outputFunc = [
  '1. Disabled',
  '2. Car Motion Restricted (CMR)',
  '3. Door Closing Restricted (DCR)',
  '4. Front Door Fully Open (DFOF)',
  '5. Front Door Fully Closed (DFCF)',
  '6. Rear Door Fully Open (DFOR)',
  '7. Rear Door Fully Closed (DFCR)',
  '8. Car Gate Switch (CGS1)',
  '9. Hoistway Door Lock (HDL1)',
  '10. Device Error (DERR)',
  '11. Car Gate Switch and  RL3 State (CGS1 & RL3)',
  '12. Native DLM Function 1  (DLM1)',
  '13. Gate SW 1 & Gate SW 2 (CGS1 & CGS2)',
  '14. Fire Return Floor (FRF)',
  '15. Fire Service Light (FSL)',
  '16. Fire Service Phase II (FSPII)',
  '17. Door Lock 1 & Door Lock 2 (HDL1 & HDL2)',
  '18. CGS1 & CGS2 & RL3 (CGS1 & CGS2 & RL3)',
  '19. CMR 3s Pulse (DCR 3SP)',
  '20. DCR 3s Pulse (CMR 3SP)',
  '21. DCR or CMR 3s Pulse (CMR||DCR 3SP)',
  '22. DFOR and CGS1 (DFOR & CGS1)',
  '23. DCR and DFOF (DCR & DFOF)',
  '24. DCR and DFOR (DCR & DFOR)',
];

export const tablePage = 1;
export const tableSize = 10;
