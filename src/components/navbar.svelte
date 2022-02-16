<script>
	let isToggled = false;

	const handleToggleNav = () => {
		isToggled = !isToggled;
	};
</script>

<div class="px-5 pt-5">
	<div class=" flex justify-between items-start ">
		<div class="flex justify-between items-center w-full flex-col lg:flex-row flex-wrap">
			<div class="w-full lg:w-auto flex flex-row-reverse justify-between">
				<button on:click={handleToggleNav}>
					<img class="h-10 mt-1 lg:hidden" src="/assets/images/menu.svg" alt="" />
				</button>
				<div class="flex w-[24vh] items-center">
					<div class="flex w-[24vh] justify-between items-center">
						<div class="w-28 h-10 border-2 border-white rounded-lg relative">
							<div class="w-28 h-10 border-2 border-white rounded-lg left-1 absolute top-1">
								<div class="relative">
									<div
										class=" right-1 w-[106px] -mt-[1px] h-8 transition-all ease-linear duration-200
										hover:bg-slate-50 cursor-pointer text-white hover:text-black rounded-tl-md
										rounded-br-md absolute ">
										<div class="relative flex justify-center items-center h-full">
											<h1 class="text-xs font-bold font-mono">{'{() => MERABi}'}</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="  rotate-[332deg] ml-2 focus:translate-y-[13px] translate-y-[8px]  transition-all fill-white focus:fill-yellow-300">
						<svg class=" " width="12mm" height="14mm"   version="1.0" xmlns="http://www.w3.org/2000/svg" >
							<metadata>
							<rdf:RDF>
							<cc:Work rdf:about="">
							<dc:format>image/svg+xml</dc:format>
							<dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
							</cc:Work>
							</rdf:RDF>
							</metadata>
							<sodipodi:namedview borderopacity="1.0" gridempspacing="10" gridoriginx="0mm" gridoriginy="0mm" gridspacingx="1mm" gridspacingy="1mm" gridtolerance="0.5mm" guidetolerance="0.5mm" showgrid="true"/>
							<path transform="translate(3.5433 -1.5605e-8)" d="m10.63 24.759a7.0866 7.0866 0 1 1-1.39e-4 0.042788"   />
							<path d="m31.89 3.5433s-7.0866 14.173-7.6611 14.792" />
							</svg>
					</button>
				</div>
			</div>
			<div
				class="text-white lg:mt-0 {isToggled ? 'mt-10 pb-10 lg:pb-0 lg:mt-0 ' : 'h-0 mt-0 '}
				lg:w-auto flex ease-linear duration-100 items-center transition-all overflow-hidden
				justify-center lg:h-auto w-full">
				<ul class="flex flex-col lg:flex-row items-center gap-y-5 w-full">
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150
						hover:bg-[#e720667e]">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">About</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150
						hover:bg-[#e720667e]">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Writing</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150
						hover:bg-[#e720667e]">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Portfolio</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150
						hover:bg-[#e720667e]">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Resume</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150
						hover:bg-[#e720667e]">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
