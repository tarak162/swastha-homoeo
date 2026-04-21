export function TrustBar() {
    const stats = [
        {
            value: "12+",
            label: "Years Experience",
        },
        {
            value: "5★",
            label: "Google Rating",
        },
        {
            value: "11+",
            label: "Conditions Treated",
        },
    ];

    return (
        <section className="w-full bg-primary/5 py-10 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <div className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                                {stat.label}
                            </div>
                            {index < stats.length - 1 && (
                                <div className="absolute right-0 hidden h-12 w-px bg-border/40 sm:block" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
