const Page = () => {
  return (
      <section className="min-h-dvh w-full bg-[#f6f5ee]">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-background/50" />
            <div className="aspect-video rounded-xl bg-background/50" />
            <div className="aspect-video rounded-xl bg-background/50" />
          </div>
          <div className="min-h-dvh flex-1 rounded-xl bg-background/50" />
        </div>
      </section>
  );
}
export default Page
