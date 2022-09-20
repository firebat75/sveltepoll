<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";
	import PollList from "./components/PollList.svelte";
	import CreateNewPollForm from "./components/CreatePollForm.svelte";
	import CreatePollForm from "./components/CreatePollForm.svelte";

	// tabs
	let items = ["Current Polls", "Add New Poll"];
	let activeItem = "Current Polls";

	const tabChange = (e) => {
		activeItem = e.detail;
	};

	//polls
	let polls = [
		{
			id: 1,
			question: "Python or Javascript?",
			answerA: "Python",
			answerB: "Javascript",
			votesA: 9,
			votesB: 15,
		},
		{
			id: 2,
			question: "Firebase or Pocketbase?",
			answerA: "Firebase",
			answerB: "Pocketbase",
			votesA: 80,
			votesB: 4,
		},
		{
			id: 3,
			question: "Do you like Waffles?",
			answerA: "Yes",
			answerB: "No",
			votesA: 4,
			votesB: 5,
		},
	];

	const handleAdd = (e) => {
		const poll = e.detail;
		polls = [poll, ...polls];
		console.log(polls);
		activeItem = "Current Polls";
	};
</script>

<Header />
<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === "Current Polls"}
		<PollList {polls} />
	{:else if activeItem === "Add New Poll"}
		<CreatePollForm on:add={handleAdd} />
	{/if}
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quam
		dolor, pulvinar ut purus id, consequat congue felis. Ut mollis sapien
		nisi, ac luctus enim luctus non. Duis ac lacus sed quam faucibus sodales
		et non justo. Praesent tortor arcu, malesuada at imperdiet non, semper
		ac tellus. Etiam vitae gravida augue. Donec euismod mollis dui, vel
		pellentesque mi porta sed.
	</p>
</main>
<Footer />

<style>
	main {
		max-width: 960px;
		margin: 40px auto;
	}
</style>
