import {
  LoginButton,
  LogoutButton,
  ProfileButton,
} from "@/components/buttons.component";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        { session
          ? <div>
              <LogoutButton name={session?.user?.name ?? undefined} /> | <ProfileButton />
            </div>
          : <LoginButton />
        }

      </div>
    </main>
  );
}