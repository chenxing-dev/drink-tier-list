import { hydrate, prerender as ssr } from 'preact-iso';
import { drinks } from './data/drinks';
import Header from './components/Header';
import TierList from './components/TierList';
import Footer from './components/Footer';
import './style.css';

export function App() {
	return (
		<div className="min-h-screen flex flex-col bg-neutral-100">
			<Header drinks={drinks} />
			<main className="flex-grow flex flex-col items-center w-full mx-auto px-4 py-4">
				{/* 副标题 - 移动端显示 */}
				<div className="block md:hidden text-center mb-4">
					<p className="italic text-lg font-medium">“好喝难喝，喝过才敢评”</p>
				</div>
				<TierList drinks={drinks} />
				{/* 下方广告横幅 */}
				<div className="w-full mt-6 border-4 border-black bg-gradient-to-r from-yellow-400 to-pink-400 p-4 shadow-neo">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-xl font-black">限时特惠！</h2>
							<p className="font-bold">所有测评饮料8折起</p>
						</div>
						<button className="bg-red-500 text-white font-black px-4 py-2 border-3 border-black shadow-neo hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
							立即购买
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
