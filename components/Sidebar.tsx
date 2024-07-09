export const Sidebar = () => (
    <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
        <div className="space-y-2"><p className="font-medium">On This Page</p>
            <ul className="m-0 list-none">
                <li className="mt-0 pt-2"><a href="#installation" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">Installation</a></li>
                <li className="mt-0 pt-2"><a href="#usage" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">Usage</a></li>
                <li className="mt-0 pt-2"><a href="#examples" className="inline-block no-underline transition-colors hover:text-foreground font-medium text-foreground">Examples</a>
                    <ul className="m-0 list-none pl-4">
                        <li className="mt-0 pt-2"><a href="#date-picker" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">Date Picker</a></li>
                        <li className="mt-0 pt-2"><a href="#date-range-picker" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">Date Range Picker</a></li>
                        <li className="mt-0 pt-2"><a href="#with-presets" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">With Presets</a></li>
                        <li className="mt-0 pt-2"><a href="#form" className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground">Form</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
);