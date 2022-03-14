
<template>
    <div>
        <div class="form-group">
            <router-link to="/cug" class="btn btn-primary">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new Employee</div>
            <div class="panel-body">
                <form v-on:submit.prevent="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee ID</label>
                            <input type="text" v-model="employees.Employee_id" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee Name</label>
                            <input type="text" v-model="employees.Employee_name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Employee CUG Number</label>
                            <input type="text" v-model="employees.Employee_cug_number" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                employees: {
                    Employee_id: '',
                    Employee_name: '',
                    Employee_cug_number: '',
                }
            }
        },
        methods: {
            saveForm() {
                var app = this;
                var newEmployee = app.employees;
                axios.post('/api/cugs', newEmployee)
                    .then(function (resp) {
                        app.$router.push({path: '/cug'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your employee");
                    });
            }
        }
    }
</script>
