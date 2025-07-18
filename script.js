$(document).ready(function () {
  //adding task to dom

  $("#add-btn").click(function () {
    const taskString = $("#todo").val().trim();
    const taskComment = $("#todo-comment").val().trim();

    const now = new Date(); //so this is to store time
    console.log(now);

    function updatedTime(date) {
      //so as we need to formate the time stamp so for that we need to use fiunction
      const option = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      return date.toLocaleString("en-US", option); //so this takes the local time string formate from the my system ("en-us" means it is us english based string and "option" is second parameter as the show the formate like where to get place in which formate)
    }
    const timeStamp = updatedTime(now); //we store the function in a varible so we can use it in a way and aslo as we need to send the now time to as a parameters so "now" is the varible which have the full time like fullyear(), date() these all mathodes are store in the "now"
    const comentbox = `
      <span
                class="inline-flex items-center rounded-md bg-pink-200 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-pink-700/10 ring-inset cursor-pointer space-x-2
                coment-hit"
              >
                <span class="rounded-full  bg-red-600 co-hit"
                  ><p class="text-white icons"><svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8 toggle-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5" stroke="#121923" stroke-width="1.2"></path> </g></svg></p></span
                >
                <div class="bg-pink-200 coment-show" style="display:none;">
                  <p>${taskComment}</p>
                </div>
              </span>
    `;
    if (taskString === "") {
      alert("please add task");
      return; //so this early return will make sure that we have to add task
    }
    if (taskComment === "") {
      //this is make sure that if we not fill comment the task will still add it make commnet optional
      $("#todo-con").append(` <div
        
        class="todos flex items-center content-center space-x-4 mt-5 justify-between text-rose-600" data-status="pending"
      >
        <ul id="todo-tasks" class="flex">
          <img src="tasks-tick-svgrepo-com.svg" class="w-10" alt="" />
          <li class="p-4">
            <h2 class="font-bold w-100">${taskString}</h2>
          </li>
        </ul>
        <div
          id="time-line"
          class="flex space-x-4 bg-amber-100 p-2 rounded-2xl font-semibold justify-center content-center items-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 8V12L15 15"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="green"
                stroke-width="2"
              ></circle>
            </g>
          </svg>
          <p>${timeStamp}</p>
        </div>

        <svg
          fill="black"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 386.802 386.802"
          xml:space="preserve"
          class="working-on  w-15 active:translate-y-1 cursor-pointer"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M285.079,162.206c0-4.971,4.029-9,9-9h17.944c4.971,0,9,4.029,9,9s-4.029,9-9,9h-17.944 C289.108,171.206,285.079,167.177,285.079,162.206z M315.854,223.371c0,4.971,4.029,9,9,9h24.15c0.055,0.001,0.11,0.001,0.165,0.001 c4.971,0,9-4.029,9-9v-92.083c0-4.971-4.029-9-9-9s-9,4.029-9,9v83.082h-15.315C319.883,214.371,315.854,218.4,315.854,223.371z M313.277,141.598c1.771,1.875,4.155,2.822,6.546,2.822c2.217,0,4.438-0.814,6.177-2.456c3.614-3.413,3.777-9.108,0.365-12.723 l-3.899-4.13c-3.411-3.613-9.106-3.778-12.723-0.366c-3.614,3.412-3.777,9.108-0.365,12.723L313.277,141.598z M175.125,99.797 c20.693,0,37.528,16.835,37.528,37.528c0,20.693-16.835,37.528-37.528,37.528c-20.692,0-37.527-16.835-37.527-37.528 C137.598,116.632,154.433,99.797,175.125,99.797z M175.125,117.797c-10.768,0-19.527,8.76-19.527,19.528 c0,10.768,8.76,19.528,19.527,19.528s19.528-8.76,19.528-19.528C194.654,126.558,185.893,117.797,175.125,117.797z M326.365,195.171 c3.412-3.614,3.249-9.31-0.365-12.723c-3.614-3.414-9.31-3.248-12.723,0.364l-3.899,4.129c-3.412,3.614-3.249,9.31,0.365,12.723 c1.739,1.643,3.96,2.457,6.177,2.457c2.39,0,4.775-0.946,6.546-2.821L326.365,195.171z M107.322,150.057 c-4.335,0.873-8.793,1.316-13.251,1.316c-36.772,0-66.689-29.916-66.689-66.688C27.381,47.915,57.298,18,94.071,18 c31.028,0,58.41,21.951,65.107,52.195c1.075,4.853,5.883,7.915,10.733,6.841c4.853-1.075,7.916-5.88,6.841-10.733 c-4.103-18.523-14.514-35.349-29.317-47.375C132.412,6.722,113.46,0,94.071,0C47.373,0,9.381,37.99,9.381,84.686 c0,46.697,37.991,84.688,84.689,84.688c5.649,0,11.304-0.562,16.806-1.67c4.873-0.981,8.027-5.728,7.046-10.6 C116.94,152.23,112.196,149.08,107.322,150.057z M252.437,368.8h-15.315v-83.083c0-4.958-4.01-8.982-8.968-9l-51.789-0.186v-65.813 l63.482,21.192c4.715,1.572,9.813-0.973,11.387-5.688c1.573-4.714-0.973-9.813-5.688-11.387l-75.039-25.049 c-0.952-0.355-1.981-0.553-3.056-0.563c-0.141-0.003-0.271,0-0.406,0.005c-0.006,0-0.013,0-0.02,0.001 c-1.992,0.074-3.82,0.795-5.277,1.961c-0.979,0.78-1.804,1.77-2.397,2.932c-0.332,0.647-0.588,1.34-0.756,2.067 c-0.181,0.774-0.255,1.553-0.23,2.319v86.959c-0.005,1.293,0.264,2.523,0.751,3.636c0.003,0.008,0.007,0.017,0.011,0.025 s0.007,0.017,0.011,0.024c0,0.001,0.001,0.001,0.001,0.002c0.004,0.008,0.007,0.015,0.01,0.022c0.001,0.001,0.001,0.002,0.002,0.003 c0.003,0.007,0.006,0.015,0.01,0.021c0.001,0.002,0.002,0.004,0.003,0.006c0.002,0.006,0.005,0.013,0.008,0.019 c0.001,0.002,0.002,0.004,0.003,0.006c0.003,0.006,0.006,0.012,0.009,0.018c0.001,0.003,0.002,0.005,0.003,0.008 c0.003,0.005,0.006,0.011,0.008,0.017c0.002,0.003,0.003,0.006,0.005,0.009c0.002,0.005,0.005,0.01,0.007,0.015 c0.002,0.003,0.003,0.007,0.005,0.011c0.002,0.004,0.005,0.009,0.007,0.013s0.003,0.008,0.005,0.012 c0.003,0.004,0.004,0.008,0.007,0.013c0.002,0.004,0.004,0.009,0.006,0.014c0.002,0.004,0.004,0.007,0.005,0.011 c0.003,0.005,0.006,0.01,0.008,0.015c0.001,0.003,0.003,0.006,0.004,0.009c0.003,0.005,0.006,0.011,0.009,0.017 c0.001,0.002,0.002,0.004,0.003,0.007c0.003,0.006,0.007,0.012,0.01,0.019c0.001,0.001,0.002,0.004,0.002,0.005 c0.004,0.007,0.007,0.013,0.01,0.02c0.001,0.001,0.002,0.003,0.003,0.005c0.003,0.007,0.007,0.014,0.01,0.021 c0.001,0.001,0.001,0.002,0.002,0.003c0.004,0.007,0.007,0.014,0.011,0.021c0,0.001,0.001,0.002,0.001,0.003 c0.004,0.007,0.008,0.015,0.012,0.022c0,0,0.001,0.001,0.001,0.002c0.004,0.007,0.008,0.015,0.011,0.022 c0.001,0,0.001,0.001,0.001,0.002c0.288,0.566,0.634,1.099,1.03,1.588l0.001,0.001c0.005,0.006,0.011,0.013,0.016,0.02l0.001,0.001 c0.005,0.006,0.01,0.012,0.015,0.018c0.001,0.001,0.002,0.002,0.003,0.003c0.005,0.006,0.011,0.013,0.016,0.019 c0,0,0.001,0.001,0.001,0.001c0.005,0.006,0.01,0.012,0.015,0.018c0.001,0.001,0.002,0.002,0.003,0.003 c0.005,0.006,0.01,0.011,0.015,0.017c0.001,0.001,0.002,0.002,0.003,0.004c0.004,0.005,0.009,0.01,0.013,0.016 c0.002,0.002,0.003,0.003,0.005,0.005c0.005,0.005,0.009,0.01,0.013,0.015c0.002,0.002,0.003,0.003,0.005,0.005 c0.004,0.005,0.008,0.01,0.012,0.015c0.002,0.002,0.004,0.004,0.006,0.006c0.004,0.004,0.008,0.009,0.012,0.014 c0.002,0.002,0.004,0.004,0.006,0.007c0.004,0.004,0.007,0.008,0.011,0.013c0.002,0.003,0.005,0.005,0.007,0.008 c0.004,0.004,0.007,0.008,0.011,0.012c0.002,0.003,0.005,0.006,0.007,0.008c0.004,0.004,0.007,0.008,0.011,0.012 c0.002,0.003,0.005,0.006,0.008,0.009c0.003,0.003,0.006,0.007,0.009,0.01s0.006,0.007,0.009,0.01 c0.003,0.003,0.005,0.006,0.008,0.009c0.004,0.004,0.007,0.008,0.011,0.012c0.002,0.002,0.004,0.005,0.007,0.008 c0.003,0.004,0.007,0.008,0.011,0.012c0.002,0.003,0.004,0.005,0.006,0.007c0.005,0.005,0.008,0.009,0.013,0.014 c0.001,0.002,0.003,0.003,0.005,0.005c0.004,0.005,0.009,0.01,0.013,0.015c0.002,0.001,0.003,0.003,0.005,0.005 c0.004,0.005,0.009,0.01,0.014,0.016c0.001,0.001,0.002,0.002,0.003,0.003c0.005,0.005,0.01,0.011,0.015,0.016 c0.002,0.002,0.003,0.003,0.004,0.004c0.005,0.005,0.01,0.011,0.015,0.016c0.001,0.001,0.002,0.001,0.002,0.002 c0.006,0.006,0.011,0.012,0.017,0.018c0.001,0,0.001,0.001,0.002,0.002c0.005,0.006,0.012,0.012,0.017,0.018v0 c0.006,0.006,0.013,0.013,0.019,0.02v0c1.636,1.757,3.967,2.859,6.557,2.869l51.789,0.186v82.884 c-0.002,0.076-0.003,0.153-0.003,0.23c0,3.098,1.564,5.83,3.947,7.449c1.44,0.98,3.182,1.553,5.056,1.553 c0.063,0,0.128,0,0.191-0.002h24.124c4.971,0,9-4.029,9-9S257.408,368.8,252.437,368.8z M368.42,243.424 c-0.064,0-0.128,0-0.191,0.002H239.764c-4.971,0-9,4.029-9,9s4.029,9,9,9H359.42v107.372h-31.05c-4.971,0-9,4.029-9,9s4.029,9,9,9 h40.05c4.971,0,9-4.029,9-9c0-0.556-0.051-1.099-0.146-1.627c0.096-0.528,0.146-1.071,0.146-1.627V252.426c0,0,0,0,0-0.002 C377.42,247.454,373.391,243.424,368.42,243.424z M192.868,308.868h-50.457v-82.307c0-4.971-4.029-9-9-9s-9,4.029-9,9v91.04 c-0.003,0.089-0.004,0.178-0.004,0.267V377.8c0,4.971,4.029,9,9,9s9-4.029,9-9v-50.932h41.461V377.8c0,4.971,4.029,9,9,9 s9-4.029,9-9v-59.932C201.868,312.897,197.838,308.868,192.868,308.868z M128.152,118.769c-3.517,3.515-9.214,3.514-12.729,0 l-7.294-7.294c-1.607,0.847-3.298,1.553-5.059,2.103v10.31c0,4.971-4.029,9-9,9s-9-4.029-9-9v-10.309 c-1.762-0.55-3.455-1.257-5.063-2.104l-7.291,7.294c-3.515,3.515-9.212,3.517-12.729,0.002c-3.515-3.514-3.516-9.213-0.002-12.728 l7.293-7.296c-0.847-1.607-1.554-3.299-2.104-5.061H54.87c-4.971,0-9-4.029-9-9s4.029-9,9-9h10.308 c0.55-1.761,1.256-3.454,2.104-5.061l-7.293-7.293c-3.515-3.515-3.515-9.213,0.001-12.728c3.515-3.514,9.213-3.515,12.728,0 l7.294,7.295c1.607-0.847,3.3-1.553,5.061-2.103v-10.31c0-4.971,4.029-9,9-9s9,4.029,9,9v10.31c1.76,0.55,3.451,1.255,5.058,2.102 l7.296-7.295c3.515-3.514,9.213-3.515,12.728,0c3.515,3.515,3.515,9.213-0.001,12.728l-7.293,7.293 c0.847,1.607,1.554,3.299,2.104,5.061h10.307c4.971,0,9,4.029,9,9s-4.029,9-9,9h-10.307c-0.55,1.761-1.257,3.454-2.104,5.061 l7.294,7.294C131.667,109.556,131.667,115.254,128.152,118.769z M106.328,84.686c0-6.758-5.498-12.256-12.257-12.256 c-6.761,0-12.261,5.498-12.261,12.256c0,6.759,5.5,12.258,12.261,12.258C100.83,96.944,106.328,91.445,106.328,84.686z"></path>
          </g>
        </svg>

        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          class="mark-completed  w-15 cursor-pointer active:translate-y-1"
        > 
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill=""
            ></path>
          </g>
        </svg>

        <img
          src="edit-content-svgrepo-com.svg"
          alt=""
          class="w-13 cursor-pointer active:translate-y-1 edit-btn"
        />
        <img
          src="delete-svgrepo-com.svg"
          alt=""
          class="dele w-13 cursor-pointer active:translate-y-1"
        />
      </div>`);
    } else {
      //thi is for adding both commnet and task
      $("#todo-con").append(` <div
        
        class="todos flex items-center content-center space-x-4 mt-5 justify-between text-rose-600" data-status="pending"
      >
        <ul id="todo-tasks" class="flex">
          <img src="tasks-tick-svgrepo-com.svg" class="w-10" alt="" />
          <li class="p-4">
            <h2 class="font-bold w-100">${taskString}</h2>
          ${comentbox}
          </li>
        </ul>
        <div
          id="time-line"
          class="flex space-x-4 bg-amber-100 p-2 rounded-2xl font-semibold justify-center content-center items-center"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-10"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 8V12L15 15"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
              ></path>
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="green"
                stroke-width="2"
              ></circle>
            </g>
          </svg>
          <p>${timeStamp}</p>
        </div>

        <svg
          fill="black"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 386.802 386.802"
          xml:space="preserve"
          class="working-on  w-15 active:translate-y-1 cursor-pointer"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M285.079,162.206c0-4.971,4.029-9,9-9h17.944c4.971,0,9,4.029,9,9s-4.029,9-9,9h-17.944 C289.108,171.206,285.079,167.177,285.079,162.206z M315.854,223.371c0,4.971,4.029,9,9,9h24.15c0.055,0.001,0.11,0.001,0.165,0.001 c4.971,0,9-4.029,9-9v-92.083c0-4.971-4.029-9-9-9s-9,4.029-9,9v83.082h-15.315C319.883,214.371,315.854,218.4,315.854,223.371z M313.277,141.598c1.771,1.875,4.155,2.822,6.546,2.822c2.217,0,4.438-0.814,6.177-2.456c3.614-3.413,3.777-9.108,0.365-12.723 l-3.899-4.13c-3.411-3.613-9.106-3.778-12.723-0.366c-3.614,3.412-3.777,9.108-0.365,12.723L313.277,141.598z M175.125,99.797 c20.693,0,37.528,16.835,37.528,37.528c0,20.693-16.835,37.528-37.528,37.528c-20.692,0-37.527-16.835-37.527-37.528 C137.598,116.632,154.433,99.797,175.125,99.797z M175.125,117.797c-10.768,0-19.527,8.76-19.527,19.528 c0,10.768,8.76,19.528,19.527,19.528s19.528-8.76,19.528-19.528C194.654,126.558,185.893,117.797,175.125,117.797z M326.365,195.171 c3.412-3.614,3.249-9.31-0.365-12.723c-3.614-3.414-9.31-3.248-12.723,0.364l-3.899,4.129c-3.412,3.614-3.249,9.31,0.365,12.723 c1.739,1.643,3.96,2.457,6.177,2.457c2.39,0,4.775-0.946,6.546-2.821L326.365,195.171z M107.322,150.057 c-4.335,0.873-8.793,1.316-13.251,1.316c-36.772,0-66.689-29.916-66.689-66.688C27.381,47.915,57.298,18,94.071,18 c31.028,0,58.41,21.951,65.107,52.195c1.075,4.853,5.883,7.915,10.733,6.841c4.853-1.075,7.916-5.88,6.841-10.733 c-4.103-18.523-14.514-35.349-29.317-47.375C132.412,6.722,113.46,0,94.071,0C47.373,0,9.381,37.99,9.381,84.686 c0,46.697,37.991,84.688,84.689,84.688c5.649,0,11.304-0.562,16.806-1.67c4.873-0.981,8.027-5.728,7.046-10.6 C116.94,152.23,112.196,149.08,107.322,150.057z M252.437,368.8h-15.315v-83.083c0-4.958-4.01-8.982-8.968-9l-51.789-0.186v-65.813 l63.482,21.192c4.715,1.572,9.813-0.973,11.387-5.688c1.573-4.714-0.973-9.813-5.688-11.387l-75.039-25.049 c-0.952-0.355-1.981-0.553-3.056-0.563c-0.141-0.003-0.271,0-0.406,0.005c-0.006,0-0.013,0-0.02,0.001 c-1.992,0.074-3.82,0.795-5.277,1.961c-0.979,0.78-1.804,1.77-2.397,2.932c-0.332,0.647-0.588,1.34-0.756,2.067 c-0.181,0.774-0.255,1.553-0.23,2.319v86.959c-0.005,1.293,0.264,2.523,0.751,3.636c0.003,0.008,0.007,0.017,0.011,0.025 s0.007,0.017,0.011,0.024c0,0.001,0.001,0.001,0.001,0.002c0.004,0.008,0.007,0.015,0.01,0.022c0.001,0.001,0.001,0.002,0.002,0.003 c0.003,0.007,0.006,0.015,0.01,0.021c0.001,0.002,0.002,0.004,0.003,0.006c0.002,0.006,0.005,0.013,0.008,0.019 c0.001,0.002,0.002,0.004,0.003,0.006c0.003,0.006,0.006,0.012,0.009,0.018c0.001,0.003,0.002,0.005,0.003,0.008 c0.003,0.005,0.006,0.011,0.008,0.017c0.002,0.003,0.003,0.006,0.005,0.009c0.002,0.005,0.005,0.01,0.007,0.015 c0.002,0.003,0.003,0.007,0.005,0.011c0.002,0.004,0.005,0.009,0.007,0.013s0.003,0.008,0.005,0.012 c0.003,0.004,0.004,0.008,0.007,0.013c0.002,0.004,0.004,0.009,0.006,0.014c0.002,0.004,0.004,0.007,0.005,0.011 c0.003,0.005,0.006,0.01,0.008,0.015c0.001,0.003,0.003,0.006,0.004,0.009c0.003,0.005,0.006,0.011,0.009,0.017 c0.001,0.002,0.002,0.004,0.003,0.007c0.003,0.006,0.007,0.012,0.01,0.019c0.001,0.001,0.002,0.004,0.002,0.005 c0.004,0.007,0.007,0.013,0.01,0.02c0.001,0.001,0.002,0.003,0.003,0.005c0.003,0.007,0.007,0.014,0.01,0.021 c0.001,0.001,0.001,0.002,0.002,0.003c0.004,0.007,0.007,0.014,0.011,0.021c0,0.001,0.001,0.002,0.001,0.003 c0.004,0.007,0.008,0.015,0.012,0.022c0,0,0.001,0.001,0.001,0.002c0.004,0.007,0.008,0.015,0.011,0.022 c0.001,0,0.001,0.001,0.001,0.002c0.288,0.566,0.634,1.099,1.03,1.588l0.001,0.001c0.005,0.006,0.011,0.013,0.016,0.02l0.001,0.001 c0.005,0.006,0.01,0.012,0.015,0.018c0.001,0.001,0.002,0.002,0.003,0.003c0.005,0.006,0.011,0.013,0.016,0.019 c0,0,0.001,0.001,0.001,0.001c0.005,0.006,0.01,0.012,0.015,0.018c0.001,0.001,0.002,0.002,0.003,0.003 c0.005,0.006,0.01,0.011,0.015,0.017c0.001,0.001,0.002,0.002,0.003,0.004c0.004,0.005,0.009,0.01,0.013,0.016 c0.002,0.002,0.003,0.003,0.005,0.005c0.005,0.005,0.009,0.01,0.013,0.015c0.002,0.002,0.003,0.003,0.005,0.005 c0.004,0.005,0.008,0.01,0.012,0.015c0.002,0.002,0.004,0.004,0.006,0.006c0.004,0.004,0.008,0.009,0.012,0.014 c0.002,0.002,0.004,0.004,0.006,0.007c0.004,0.004,0.007,0.008,0.011,0.013c0.002,0.003,0.005,0.005,0.007,0.008 c0.004,0.004,0.007,0.008,0.011,0.012c0.002,0.003,0.005,0.006,0.007,0.008c0.004,0.004,0.007,0.008,0.011,0.012 c0.002,0.003,0.005,0.006,0.008,0.009c0.003,0.003,0.006,0.007,0.009,0.01s0.006,0.007,0.009,0.01 c0.003,0.003,0.005,0.006,0.008,0.009c0.004,0.004,0.007,0.008,0.011,0.012c0.002,0.002,0.004,0.005,0.007,0.008 c0.003,0.004,0.007,0.008,0.011,0.012c0.002,0.003,0.004,0.005,0.006,0.007c0.005,0.005,0.008,0.009,0.013,0.014 c0.001,0.002,0.003,0.003,0.005,0.005c0.004,0.005,0.009,0.01,0.013,0.015c0.002,0.001,0.003,0.003,0.005,0.005 c0.004,0.005,0.009,0.01,0.014,0.016c0.001,0.001,0.002,0.002,0.003,0.003c0.005,0.005,0.01,0.011,0.015,0.016 c0.002,0.002,0.003,0.003,0.004,0.004c0.005,0.005,0.01,0.011,0.015,0.016c0.001,0.001,0.002,0.001,0.002,0.002 c0.006,0.006,0.011,0.012,0.017,0.018c0.001,0,0.001,0.001,0.002,0.002c0.005,0.006,0.012,0.012,0.017,0.018v0 c0.006,0.006,0.013,0.013,0.019,0.02v0c1.636,1.757,3.967,2.859,6.557,2.869l51.789,0.186v82.884 c-0.002,0.076-0.003,0.153-0.003,0.23c0,3.098,1.564,5.83,3.947,7.449c1.44,0.98,3.182,1.553,5.056,1.553 c0.063,0,0.128,0,0.191-0.002h24.124c4.971,0,9-4.029,9-9S257.408,368.8,252.437,368.8z M368.42,243.424 c-0.064,0-0.128,0-0.191,0.002H239.764c-4.971,0-9,4.029-9,9s4.029,9,9,9H359.42v107.372h-31.05c-4.971,0-9,4.029-9,9s4.029,9,9,9 h40.05c4.971,0,9-4.029,9-9c0-0.556-0.051-1.099-0.146-1.627c0.096-0.528,0.146-1.071,0.146-1.627V252.426c0,0,0,0,0-0.002 C377.42,247.454,373.391,243.424,368.42,243.424z M192.868,308.868h-50.457v-82.307c0-4.971-4.029-9-9-9s-9,4.029-9,9v91.04 c-0.003,0.089-0.004,0.178-0.004,0.267V377.8c0,4.971,4.029,9,9,9s9-4.029,9-9v-50.932h41.461V377.8c0,4.971,4.029,9,9,9 s9-4.029,9-9v-59.932C201.868,312.897,197.838,308.868,192.868,308.868z M128.152,118.769c-3.517,3.515-9.214,3.514-12.729,0 l-7.294-7.294c-1.607,0.847-3.298,1.553-5.059,2.103v10.31c0,4.971-4.029,9-9,9s-9-4.029-9-9v-10.309 c-1.762-0.55-3.455-1.257-5.063-2.104l-7.291,7.294c-3.515,3.515-9.212,3.517-12.729,0.002c-3.515-3.514-3.516-9.213-0.002-12.728 l7.293-7.296c-0.847-1.607-1.554-3.299-2.104-5.061H54.87c-4.971,0-9-4.029-9-9s4.029-9,9-9h10.308 c0.55-1.761,1.256-3.454,2.104-5.061l-7.293-7.293c-3.515-3.515-3.515-9.213,0.001-12.728c3.515-3.514,9.213-3.515,12.728,0 l7.294,7.295c1.607-0.847,3.3-1.553,5.061-2.103v-10.31c0-4.971,4.029-9,9-9s9,4.029,9,9v10.31c1.76,0.55,3.451,1.255,5.058,2.102 l7.296-7.295c3.515-3.514,9.213-3.515,12.728,0c3.515,3.515,3.515,9.213-0.001,12.728l-7.293,7.293 c0.847,1.607,1.554,3.299,2.104,5.061h10.307c4.971,0,9,4.029,9,9s-4.029,9-9,9h-10.307c-0.55,1.761-1.257,3.454-2.104,5.061 l7.294,7.294C131.667,109.556,131.667,115.254,128.152,118.769z M106.328,84.686c0-6.758-5.498-12.256-12.257-12.256 c-6.761,0-12.261,5.498-12.261,12.256c0,6.759,5.5,12.258,12.261,12.258C100.83,96.944,106.328,91.445,106.328,84.686z"></path>
          </g>
        </svg>

        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#000000"
          class="mark-completed  w-15 cursor-pointer active:translate-y-1"
        > 
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 10.1666 20.4518 8.46124 19.5103 7.03891L12.355 14.9893C11.6624 15.7589 10.4968 15.8726 9.66844 15.2513L6.4 12.8C5.95817 12.4686 5.86863 11.8418 6.2 11.4C6.53137 10.9582 7.15817 10.8686 7.6 11.2L10.8684 13.6513L18.214 5.48955C16.5986 3.94717 14.4099 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              fill=""
            ></path>
          </g>
        </svg>

        <img
          src="edit-content-svgrepo-com.svg"
          alt=""
          class="w-13 cursor-pointer active:translate-y-1 edit-btn"
        />
        <img
          src="delete-svgrepo-com.svg"
          alt=""
          class="dele w-13 cursor-pointer active:translate-y-1"
        />
      </div>`);
    }
    updateStatusCounts();
    $("#todo").val("");
    $("#todo-comment").val("");
  });
  //work on feature in the task

  //commnet part
  $("#todo-con").on("click", ".co-hit", function () {
    const closeIcone = `<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye-open</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M45.3,22.1h0C43.2,19.5,35.4,11,24,11S4.8,19.5,2.7,22.1a3,3,0,0,0,0,3.8C4.8,28.5,12.6,37,24,37s19.2-8.5,21.3-11.1A3,3,0,0,0,45.3,22.1ZM24,33c-8.8,0-15.3-6.2-17.7-9,2.4-2.8,8.9-9,17.7-9s15.3,6.2,17.7,9C39.3,26.8,32.8,33,24,33Z"></path> <circle cx="24" cy="24" r="6"></circle> </g> </g> </g></svg>`;
    const showIcone = `<svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 15.5L5.5 17.5M20.5 12.5C19.8612 13.5647 19.041 14.6294 18.0008 15.501M18.0008 15.501C16.5985 16.676 14.7965 17.5 12.5 17.5M18.0008 15.501L18 15.5M18.0008 15.501L19.5 17.5M12.5 17.5C8.5 17.5 6 15 4.5 12.5M12.5 17.5V20M15.5 17L16.5 19.5M9.5 17L8.5 19.5" stroke="#121923" stroke-width="1.2"></path> </g></svg>`;
    const comentHit = $(this).closest(".coment-hit").find(".coment-show");
    comentHit.toggle();
    const icons = $(this).closest(".co-hit").find(".icons .toggle-svg");
    if (comentHit.is(":visible")) {
      icons.html(closeIcone);
    } else {
      icons.html(showIcone);
    }
  });

  //work on part and mark as read
  $("#todo-con").on("click", ".mark-completed", function () {
    const todoComplte = $(this).closest(".todos"); //selecting the div which have all items
    const status = todoComplte.attr("data-status"); //this is for storing the data-status value
    if (status === "pending") {
      //to check if it is pending it will change the status and things
      todoComplte.attr("data-status", "completed"); // by doing this we are changing status of the data-status but in the first time i did a mistake by using jq .data("status", "working") this change the value but not the html atribute in hmtl always use attr('data-sattus', 'working' )to change the attribute
      $(this).css("fill", "green"); //as we know this refer to the what we are selected to do the function so it select the icon and the .css() will make easy to change the style
      todoComplte.css("color", "green");
    } else {
      //as this is false so when the status is not pending this work then only
      todoComplte.attr("data-status", "pending");
      $(this).css("fill", "black");
      todoComplte.css("color", "red");
    }
    updateStatusCounts();
  });

  $("#todo-con").on("click", ".working-on", function () {
    const todoWorking = $(this).closest(".todos");
    const stat = todoWorking.attr("data-status");
    if (stat === "pending") {
      todoWorking.attr("data-status", "working");
      $(this).css("fill", "orange");
      todoWorking.css("color", "orange");
    } else {
      todoWorking.attr("data-status", "pending"); //
      $(this).css("fill", "black");
      todoWorking.css("color", "red");
    }
    updateStatusCounts();
  });

  //edit part

  $("#todo-con").on("click", ".edit-btn", function () {
    const task = $(this).closest(".todos");
    // Always reset status to pending on edit
    task.attr("data-status", "pending");
    const taskTextEl = task.find("h2");
    const taskComTxtEl = task.find(".coment-show p");

    const taskText = taskTextEl.text().trim();
    const taskComTxt = taskComTxtEl.text().trim();

    // Task input and Save button side by side, comment input below
    taskTextEl.replaceWith(
      `<div style="display:flex;align-items:center;margin-bottom:8px;width:100%">
        <input type="text" class="edit-task-input bg-yellow-50 p-3" value="${taskText}" style="flex:1;" />
        <button class="save-edit p-2 ml-2 bg-blue-800 rounded-2xl cursor-pointer font-bold text-white active:bg-blue-950 transition-all active:shadow-2xl active:rotate-4">Save</button>
      </div>`
    );
    taskComTxtEl.replaceWith(
      `<div style="margin-bottom:8px;width:100%"><input type="text" class="edit-coment-input bg-white p-3 w-full block" value="${taskComTxt}" style="width:100%" /></div>`
    );
    updateStatusCounts();
  });

  $("#todo-con").on("click", ".save-edit", function () {
    const task = $(this).closest(".todos");
    const taskInputs = task.find(".edit-task-input");
    const comentInputs = task.find(".edit-coment-input");

    const newInputs = taskInputs.val().trim();
    const newComents = comentInputs.val().trim();

    taskInputs.replaceWith(`<h2 class="font-bold w-100">${newInputs}</h2>`);
    comentInputs.replaceWith(`<p>${newComents}</p>`);

    //removing the save button

    $(this).remove();
    updateStatusCounts();
  });

  //delete part
  $("#todo-con").on("click", ".dele", function () {
    $(this).parent().remove();
    updateStatusCounts();
  });

  //sate to part
  function updateStatusCounts() {
    //so for showing length we have to update the dome every time we take a action so for that we need to wrap all of the length in the function so that we can call the in all action we have
    let totalTask = $(".todos").length;
    let totalCompleted = $('.todos[data-status="completed"]').length;
    console.log(totalCompleted);
    let totalPendings = $('.todos[data-status="pending"]').length;

    $("#status").html(`
      <h4>Total Task: ${totalTask}</h4>
      <h4>Completed Task: ${totalCompleted}</h4>
      <h4>Pending Task: ${totalPendings}</h4>
    `);
  }
  updateStatusCounts();
});
