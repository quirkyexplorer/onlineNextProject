import Image from "next/image";
import LinksCreateForm from './createForm'

export default function LinksPage() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LinksCreateForm />
    </main>
  );
}
