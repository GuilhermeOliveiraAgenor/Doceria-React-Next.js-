
import { create } from 'zustand'

// criar interface e variaveis globais
interface DarkModeState {
  dark: boolean
  setState: () => void //alterar a variável
}

//crio um estado baseado na minha interface
export const useDarkMode = create<DarkModeState>()(
  // inicializo as minhas variáveis e defino os comportamentos
  (set) => ({
    dark: true,
    setState: () => set((state) => ({ dark: !state.dark })),/*altera o estado da variável que a função recebeu*/
  })
)
