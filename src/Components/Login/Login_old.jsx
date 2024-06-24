'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from 'components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'components/ui/form'
import { Input } from 'components/ui/input'
import { useNavigate } from 'react-router-dom'
import { REST } from 'api/axiosConfig'
import { useDispatch } from 'react-redux'
import { login } from 'store/auth/authSlice'
import { store } from 'store/store'
import { useTranslation } from 'react-i18next'

// Define the schema for the login form
const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' })
})

export function Login() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = async () => {
    const loginData = {
      usernameOrEmail: values.email,
      password: values.password
    }
    try {
      const response = await REST.post('/auth/login', loginData)
      if (response.status === 200) {
        dispatch(
          login({
            accessToken: response.data
          })
        )
        const isLoggedIn = store.getState().auth.isLoggedIn
        console.log('isLoggedIn', isLoggedIn)
        navigate('/')
      }
    } catch (error) {}
  }
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg'>
        <div>
          <img src='/bloom.png' className='m-auto h-32' alt='' />
          <h2 className='text-center text-2xl font-bold'>Login</h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder='Email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('password')}</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder={t('password')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex justify-center'>
              <Button
                className='w-1/3 rounded-[30px] bg-[#FF5A5F] font-bold duration-300 hover:bg-gray-100 hover:text-[#FF5A5F]'
                type='submit'
              >
                Login
              </Button>
            </div>
            <p>
              {t('noAccount')}{' '}
              <a href='/register' className='text-[#FF5A5F]'>
                {t('register')}
              </a>
            </p>
          </form>
        </Form>
      </div>
    </div>
  )
}