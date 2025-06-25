export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} TechFolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
