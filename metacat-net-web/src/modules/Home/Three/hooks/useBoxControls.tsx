import { useControls } from 'leva'

export function useBoxControls() {
  // Leva will show a panel with these controls
  return useControls({
    length: { value: 10000, min: 0, max: 20000, step: 100, label: 'Boxes count' },
    size: {
      label: 'Cube size',
      value: [0.55, 0.55, 0.55],
      min: 0.1, max: 2, step: 0.01
    },
    separation: { value: 3, min: 0.1, max: 5, step: 0.1, label: 'Cube separation' }
  })
}
