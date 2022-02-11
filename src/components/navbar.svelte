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
		<div class="w-[9rem] h-10 border-2 border-white rounded-md absolute -top-2 -left-2">
			<div
				dir="ltr"
				class="w-[138px] font-mono transition-all ease-linear duration-200 h-[34px] border-2 hover:bg-white hover:text-[#1d1d1d] cursor-pointer  border-transparent  rounded-tl-md rounded-br-md absolute top-1 left-1 flex justify-center items-center font-bold"
			>
				{'{() => MERABi}'}
			</div>
		</div>
	</div>
</div>
