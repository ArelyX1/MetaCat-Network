import { useControls } from 'leva'

export function useBoxControls() {
  return useControls({
    length: { value: 50, min: 0, max: 160, step: 5, label: 'Boxes count' },
    size: {
      label: 'Cube size',
      value: [0.45, 0.45, 0.45],
      min: 0.01, max: 2, step: 0.01
    },
    separation: { value: 10, min: 0.1, max: 20, step: 0.1, label: 'Cube separation' },

  })
}
