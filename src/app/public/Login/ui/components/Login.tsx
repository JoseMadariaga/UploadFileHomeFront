import uploadImage from '@/assets/subir (2).png'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="mx-auto grid w-full max-w-3xl overflow-hidden rounded-lg border bg-background shadow-sm md:grid-cols-2">
        <div className="space-y-6 p-6 md:p-8">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Bienvenido</h1>
            <p className="text-sm text-muted-foreground">
              Inicia sesión para continuar
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder="Ejemplo325."
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Recordar
                </Label>
              </div>
              <a className="text-sm text-primary hover:underline" href="#">
                ¿Recuperar contraseña?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Ingresar
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            ¿No tienes un usuario?{' '}
            <a className="text-primary hover:underline" href="#">
              Registrar
            </a>
          </p>
        </div>
        <div className="relative hidden md:block">
          <img
            src={uploadImage}
            alt="Upload illustration"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
