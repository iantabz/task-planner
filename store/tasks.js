/** @format */

const initialTask = () => ({
  title: '',
  assignee: null,
  is_done: null,
  is_important: null,
  sort: null,
  timeID: null
})

export const state = () => ({
  APIurl: 'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks',
  tasks: [],
  task: initialTask(),
  serverQuery: {
    search: ''
  }
})

export const getters = {
  getTasks(state) {
    return state.tasks
  },
  getTask(state) {
    return state.task
  },
  getServerQuery(state) {
    return state.serverQuery
  }
}

export const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks
  },
  replaceTaskOnList(state, updatedTask) {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id)

    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask)
    }
  },
  moveTask(state, { oldIndex, newIndex }) {
    if (newIndex >= state.tasks.length) {
      let k = newIndex - state.tasks.length + 1
      while (k--) {
        state.tasks.push(undefined)
      }
    }
    state.tasks.splice(newIndex, 0, state.tasks.splice(oldIndex, 1)[0])
  },
  setTask(state, task) {
    state.task = task
  },
  updateTaskDetail(state, { key, value }) {
    state.task[key] = value
  },
  addTask(state, task) {
    state.tasks.push(task)
  },
  deleteTask(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  resetTask(state) {
    state.task = initialTask()
  },
  setServerQuery(state, { key, value }) {
    state.serverQuery[key] = value
  },
  setTitle(state, value) {
    state.task.title = value
  }
}

export const actions = {
  async fetchTasks({ state, commit }) {
    try {
      const { data } = await this.$axios.get(state.APIurl, {
        params: {
          search: state.serverQuery.search,
          sortBy: 'sort'
        }
      })
      console.log(data)
      commit('setTasks', data)
      return
    } catch (e) {
      console.error(e)
    }
  },
  async storeTask({ commit, state }, title) {
    try {
      const { data } = await this.$axios.post(state.APIurl, {
        title,
        sort: state.tasks.length
      })
      // console.log(title, data)
      if (data) {
        commit('addTask', data)
        return data
      }
    } catch (e) {
      console.error(e)
    }
  },
  async deleteTask({ commit }, task) {
    try {
      const res = await this.$axios.delete(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' + task.id
      )
      if (res) {
        commit('deleteTask', task)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async updateAssignee({ commit }, { task, user }) {
    try {
      const { data: updatedTask } = await this.$axios.put(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' + task.id,
        {
          assignee: user
        }
      )

      if (updatedTask) {
        commit('replaceTaskOnList', updatedTask)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async markAsDone({ commit }, task) {
    try {
      const { data: updatedTask } = await this.$axios.put(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' + task.id,
        {
          is_done: true
        }
      )

      if (updatedTask) {
        commit('replaceTaskOnList', updatedTask)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async undoTask({ commit }, task) {
    try {
      const { data: updatedTask } = await this.$axios.put(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' + task.id,
        {
          is_done: false
        }
      )
      if (updatedTask) {
        commit('replaceTaskOnList', updatedTask)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async markImportant({ commit }, task) {
    try {
      const { data: updatedTask } = await this.$axios.put(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' + task.id,
        {
          is_important: !task.is_important
        }
      )
      if (updatedTask) {
        commit('replaceTaskOnList', updatedTask)
      }
    } catch (e) {
      console.error(e)
    }
  },
  async updateTask({ commit, state }) {
    try {
      const { data: updatedTask } = await this.$axios.put(
        'https://63906a8d65ff41831112cdd1.mockapi.io/api/v1/tasks/' +
          state.task.id,
        { ...state.task }
      )

      if (updatedTask) {
        commit('replaceTaskOnList', updatedTask)
        commit('resetTask')
      }
    } catch (e) {
      console.error(e)
    }
  },
  setTask({ commit }, task) {
    commit('setTask', task)
  },
  resetTask({ commit }) {
    commit('resetTask')
  },
  setServerQuery({ commit }, payload) {
    commit('setServerQuery', payload)
  },
  setTitle({ commit }, title) {
    commit('setTitle', title)
  },
  moveTask({ commit, dispatch, state }, { droppedTaskID, draggedTaskID }) {
    const newIndex = state.tasks.findIndex(task => task.id === droppedTaskID)
    const oldIndex = state.tasks.findIndex(task => task.id === draggedTaskID)

    commit('moveTask', { oldIndex, newIndex })

    clearTimeout(state.timeID)

    state.timeID = setTimeout(() => {
      state.tasks.forEach(async (task, index) => {
        dispatch('setTask', {
          ...task,
          sort: index
        })
        await dispatch('updateTask')
      })
    }, 2000)
  }
}
