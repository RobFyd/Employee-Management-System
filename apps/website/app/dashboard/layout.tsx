type Props = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    return (
        <div className="flex">
            <div className="px-4">One</div>
            <div className="px-4" >{children}</div>
        </div>
    );
}