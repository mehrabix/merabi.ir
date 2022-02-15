<script>
	let isToggled = false;

	const handleToggleNav = () =>{
		
		isToggled = !isToggled;

	}


</script>

<div class="px-5 pt-5">
	<div class=" flex justify-between items-start ">
		<div class="flex justify-between items-center w-full flex-col lg:flex-row flex-wrap">
			<div class="w-full lg:w-auto flex flex-row-reverse  justify-between">
				<button on:click={handleToggleNav}><img class="h-10 mt-1 lg:hidden" src="/assets/images/menu.svg" alt="" /></button>
				<div class="flex w-[24vh] items-center">
					<div class="flex w-[24vh] justify-between items-center">
						<div class="w-28 h-10 border-2 border-white rounded-lg relative">
							<div class="w-28 h-10 border-2 border-white rounded-lg  left-1 absolute  top-1">
								<div class="relative">
									<div
										class=" right-1 w-[106px] -mt-[1px] h-8 transition-all ease-linear duration-200 hover:bg-slate-50 cursor-pointer text-white hover:text-black   rounded-tl-md rounded-br-md    absolute  "
									>
										<div class="relative flex  justify-center items-center h-full">
											<h1 class="text-xs    font-mono">{'{() => MERABi}'}</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="  mt-1 focus:text-yellow-600 focus:rotate-90 transition-all text-white"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-sun"
							><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line
								x1="12"
								y1="21"
								x2="12"
								y2="23"
							/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line
								x1="18.36"
								y1="18.36"
								x2="19.78"
								y2="19.78"
							/><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line
								x1="4.22"
								y1="19.78"
								x2="5.64"
								y2="18.36"
							/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg
						></button
					>
				
				</div>
			</div>
			<div class="text-white  lg:mt-0 {isToggled ? "mt-10 pb-10 lg:pb-0 lg:mt-0 " : "h-0 mt-0 "}  lg:w-auto flex ease-linear duration-100 items-center transition-all overflow-hidden justify-center  lg:h-auto  w-full">
				<ul class="flex flex-col lg:flex-row items-center gap-y-5 w-full">
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e720667e]"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">About</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e720667e]"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Writing</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e720667e]"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Portfolio</a>
					</li>
					<li
						class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e720667e]"
					>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a href="#">Resume</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
