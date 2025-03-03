import SubscribeComponent from "@/components/subscribe";

export default async function Home() {
  return (
    <>
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        <SubscribeComponent
          priceId="price_1QZ662GJZvKYlo2C0123456789"
          price="10"
          description="Subscribe to the newsletter"
        />
      </main>
    </>
  );
}
