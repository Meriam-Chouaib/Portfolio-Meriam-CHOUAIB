import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { persistData } from 'utils/helpers'
import { getRememberMeFromLocalStorage } from 'utils/service/storage.service'
import { FAKE_TOKEN, STORAGE_KEYS } from 'config/constant'
import { RouteIdEnum } from 'config/enums/routes.enum'

const useLogin = () => {
  const [stayConnected, setStayConnected] = useState<boolean>(
    getRememberMeFromLocalStorage()
  )
  const navigate = useNavigate()
  const formMethods = useForm({
    mode: 'onChange',
    shouldFocusError: true,
  })

  const handleLogin = async (values: any) => {
    const loginData = {
      email: values.email,
      password: values.password,
    }

    try {
      // TODO call the api when the api ready
      console.log('loginData', loginData)

      persistData(STORAGE_KEYS.TOKEN, FAKE_TOKEN)
      navigate(RouteIdEnum.Home)
    } catch (error) {
      // TODO handle error
      console.log(error)
    }
  }

  const handleStayConnectedChange = () => {
    setStayConnected(!stayConnected)
  }

  const handleSubmit = formMethods.handleSubmit(handleLogin)

  return {
    stayConnected,
    handleStayConnectedChange,
    handleSubmit,
    formMethods,
  }
}

export default useLogin
