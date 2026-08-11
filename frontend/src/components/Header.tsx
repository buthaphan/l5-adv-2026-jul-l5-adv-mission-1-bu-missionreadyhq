// Displays the application title and introduction.

function Header() {
	return (
		<header className="mb-10 text-center">
			<h1 className="text-4xl font-bold text-red-600">
				Turners AI Vehicle Inspector
			</h1>
			<p className="mt-3 text-lg text-slate-600">
				Identify a vehicle from a single image using AI.
			</p>
		</header>
	);
}

export default Header;
