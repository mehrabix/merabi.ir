<script>
	import { onMount } from 'svelte';

	let isToggled = false;
	let isDarkMode = false;

	onMount(async () => {
		let date = new Date()
		let hour = date.getHours()
		
		if (localStorage.getItem('darkMode') == 'true') {
			isDarkMode = false;
			document.getElementsByTagName('html')[0].classList.toggle('dark');
		} else if (localStorage.getItem('darkMode') == 'false') {
			isDarkMode = true;
			document.getElementsByTagName('html')[0].classList.toggle('light');
		}
		
	});

	const handleToggleNav = () => {
		isToggled = !isToggled;
	};

	const handleDarkModeToggle = () => {
		localStorage.setItem('darkMode', 'false');
		isDarkMode = !isDarkMode;
		document.getElementsByTagName('html')[0].classList.toggle('dark');
		if (!isDarkMode) {
			localStorage.setItem('darkMode', 'true');
		}
	};
</script>

<div class="sticky top-0 z-50">
	<div class=" ">
		<div class=" flex justify-between items-start bg-[#1d1d1de1] dark:bg-[#99f5b057] ">
			<div class="flex justify-between items-center w-full flex-col lg:flex-row flex-wrap">
				<div class="w-full lg:w-auto flex flex-row-reverse justify-between px-3 py-3">
					<button on:click={handleToggleNav}>
						<img
							class="h-10 mt-1 lg:hidden dark:filter dark:invert"
							src="/assets/images/menu.svg"
							alt="" />
					</button>
					<div class="flex w-[24vh] items-center">
						<div class="flex w-[24vh] justify-between items-center">
							<div
								class="w-28 h-10 border-2 border-white dark:border-[#ffa264] rounded-lg relative">
								<div
									class="w-28 h-10 border-2 border-white dark:border-[#ffa264] rounded-lg left-1
									absolute top-1">
									<div class="relative">
										<div
											class=" right-1 w-[106px] -mt-[1px] h-8 transition-all ease-linear
											duration-200 hover:bg-slate-50 dark:hover:bg-[#ff7b7b] cursor-pointer
											text-white dark:text-black hover:text-black rounded-tl-md rounded-br-md
											absolute ">
											<div class="relative flex justify-center items-center h-full">
												<h1 class="text-xs font-bold font-mono">{'{() => MERABi}'}</h1>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<button
							on:click={handleDarkModeToggle}
							class=" rotate-[333deg] ml-2 translate-y-[8px] transition-all {isDarkMode ? 'fill-yellow-300 translate-y-[13px]' : 'fill-slate-400'}">
							<svg
								class="
								"
								width="12mm"
								height="14mm"
								version="1.0"
								xmlns="http://www.w3.org/2000/svg">
								<metadata>
									<rdf:RDF>
										<cc:Work rdf:about="">
											<dc:format>image/svg+xml</dc:format>
											<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
										</cc:Work>
									</rdf:RDF>
								</metadata>
								<sodipodi:namedview
									borderopacity="1.0"
									gridempspacing="10"
									gridoriginx="0mm"
									gridoriginy="0mm"
									gridspacingx="1mm"
									gridspacingy="1mm"
									gridtolerance="0.5mm"
									guidetolerance="0.5mm"
									showgrid="true" />
								<path
									transform="translate(3.5433 -1.5605e-8)"
									d="m10.63 24.759a7.0866 7.0866 0 1 1-1.39e-4 0.042788" />
								<path d="m31.89 3.5433s-7.0866 14.173-7.6611 14.792" />
							</svg>
						</button>
					</div>
				</div>
				<div
					class="text-white dark:text-gray-600 lg:pr-5 lg:mt-0 {isToggled ? 'mt-10 pb-10 lg:pb-0 lg:mt-0 ' : 'h-0 mt-0 '}
					lg:w-auto flex ease-linear duration-100 items-center transition-all overflow-hidden
					justify-center lg:h-auto w-full">
					<ul class="flex flex-col lg:flex-row items-center gap-y-5 w-full">
						<li
							class="w-32 h-8 flex cursor-pointer justify-center items-center transition-all
							ease-linear duration-150 hover:bg-[#e720667e] dark:hover:bg-[#45ffb8]">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#">About</a>
						</li>
						<li
							class="w-32 h-8 flex cursor-pointer justify-center items-center transition-all
							ease-linear duration-150 hover:bg-[#e720667e] dark:hover:bg-[#45ffb8]">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#">Writing</a>
						</li>
						<li
							class="w-32 h-8 flex cursor-pointer justify-center items-center transition-all
							ease-linear duration-150 hover:bg-[#e720667e] dark:hover:bg-[#45ffb8]">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#">Portfolio</a>
						</li>
						<li
							class="w-32 h-8 flex cursor-pointer justify-center items-center transition-all
							ease-linear duration-150 hover:bg-[#e720667e] dark:hover:bg-[#45ffb8]">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#">Resume</a>
						</li>
						<li
							class="w-32 h-8 flex cursor-pointer justify-center items-center transition-all
							ease-linear duration-150 hover:bg-[#e720667e] dark:hover:bg-[#45ffb8]">
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
