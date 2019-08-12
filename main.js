Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks">{{ task.task }}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                {task: 'oieanrstien', complete: false},
                {task: 'Grate cheese', complete: false},
                {task: 'Milk cow', complete: false},
                {task: 'Eat banana', complete: true},
                {task: 'Play video games', complete: false},
            ]
        }
    }
});

Vue.component('task', {
   template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});
