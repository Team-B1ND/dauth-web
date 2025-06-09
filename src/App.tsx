import Router from "./components/Router/router"
import ThemeProviderContainer from "./components/common/ThemeProviderContainer"

const App =()=> {
  return (
    <>
    <ThemeProviderContainer>
      <Router/>
    </ThemeProviderContainer>
    </>
  )
}

export default App
