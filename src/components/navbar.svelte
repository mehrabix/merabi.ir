<script>
	const NavToggle = () =>{
		console.log("toggle");
		document.getElementById("nav").classList.toggle("invisible");
	}
</script>
<div class="flex justify-between items-start lg:items-center  text-white">
	<div class="flex w-full md:w-11/12 mt-2  flex-col lg:items-center lg:flex-row">
		<div on:click="{NavToggle}" class="h-11 w-11 cursor-pointer xl:hidden">
			<img class="h-10" src="/assets/images/menu.svg" alt="" />
		</div>
		<ul id="nav" class=" invisible flex w-full lg:w-8/12 h-[86vh] items-center lg:h-auto justify-around font-Merriweather-Black flex-col lg:flex-row">
			<li class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e72065]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">About</a>
			</li>
			<li class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e72065]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">Writing</a>
			</li>
			<li class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e72065]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">Portfoloo</a>
			</li>
			<li class="w-32 h-8 flex justify-center items-center transition-all ease-linear duration-150 hover:bg-[#e72065]">
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#">Resume</a>
			</li>
		</ul>
	</div>
	<div class="w-[9rem] h-10 border-2 border-white rounded-md absolute left-8 xl:relative mt-3">
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
