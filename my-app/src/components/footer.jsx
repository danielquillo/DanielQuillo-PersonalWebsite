export default function Footer() {
    return (
        <footer className="py-8 text-center">
            <div className="mx-auto w-full max-w-[1100px] px-4">
                <small className="text-sm text-[var(--muted)]">
                    &copy; {new Date().getFullYear()} Daniel Quillo
                </small>
            </div>
        </footer>
    )
}
