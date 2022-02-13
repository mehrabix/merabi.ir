<script>
	let _navbarToggle = false;
	const NavToggle = () => {
		if (!_navbarToggle) {
			_navbarToggle = true;
		} else {
			_navbarToggle = false;
		}
	};
</script>

<div class="flex justify-between items-start lg:items-center  text-white lg:p-4">
	<div class="flex   flex-col lg:items-center lg:flex-row w-full md:w-10/12">
		<div on:click={NavToggle} class="h-11 w-11 z-50 cursor-pointer lg:hidden m-4 mt-6 mr-8">
			<img class="h-10" src="/assets/images/menu.svg" alt="" />
		</div>
		<div class="absolute w-full lg:relative bg-[#00000057] lg:bg-transparent">
			<ul
				id="nav"
				class="  lg:visible transition-all  lg:mt-auto  flex {_navbarToggle
					? 'h-[100vh]'
					: 'invisible h-0'}   w-full lg:w-8/12  items-center lg:h-auto justify-evenly font-Merriweather-Black flex-col lg:flex-row"
			>
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
	<div class="w-[9rem] h-10 border-2 border-white rounded-md absolute left-8 xl:relative m-4 mt-7">
		
		<div class="flex">
			<div class="w-[9rem] h-10 border-2 border-white rounded-md absolute -top-2 -left-2">
				<div
					dir="ltr"
					class="w-[138px] font-mono transition-all ease-linear duration-200 h-[34px] border-2 hover:bg-white hover:text-[#1d1d1d] cursor-pointer  border-transparent  rounded-tl-md rounded-br-md absolute top-1 left-1 flex justify-center items-center font-bold"
				>
					{'{() => MERABi}'}
				</div>
			</div>
			<button class="absolute -right-14 mt-1 focus:text-yellow-600"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></button>
		</div>
	</div>
</div>
