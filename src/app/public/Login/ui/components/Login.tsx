import uploadImage from '@/assets/subir (2).png'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function Login() {
  return (
    <div className="min-h-screen bg-muted/30 px-4 py-10">
      <div className="mx-auto grid w-full max-w-3xl overflow-hidden rounded-lg border bg-background shadow-sm md:grid-cols-2">
        <div className="space-y-6 p-6 md:p-8">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to continue
            </p>
          </div>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal">
                  Remember me
                </Label>
              </div>
              <a className="text-sm text-primary hover:underline" href="#">
                Forgot password?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <a className="text-primary hover:underline" href="#">
              Register
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
