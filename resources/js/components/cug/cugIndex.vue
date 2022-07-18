<template>
<div>
    <div class="mt-4">
        <h1 class="d-flex justify-content-center">CUG SECTION</h1>
    </div>
    <div class="mt-4">
        <router-link to="/welcome" class="btn btn-success ml-4">Back</router-link>
    </div>
 <div class="p-6">
	<div class="form-group">
		<router-link :to="{name: 'create.cug'}" class="btn btn-success">Create new Employee</router-link>
        
        <button class="btn btn-sm btn-primary" @click="print">Print</button>
        <!-- <router-link :to="{name: 'importEmployee'}" class="col-md-12">import</router-link> -->
	</div>
	<div class="panel panel-default">
		<div id="print" class="panel-body">
			<table class="table table-bordered table-striped">
			<thead>
				<tr>
				  <th>Employee ID</th>
				  <th>Employee Name</th>
				  <th>Employee CUG Number</th>
                  <th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee, index in employees" :key="index">
                    <td>{{ employee.Employee_id }}</td>
                    <td>{{ employee.Employee_name }}</td>
                    <td>{{ employee.Employee_cug_number }}</td>
                    <td>
                        <router-link :to="{name: 'edit.cug', params: {id: employee.id}}" class="btn btn-xs btn-default">
                            Edit
                        </router-link>
                        <a href="#" class="btn btn-xs btn-danger" v-on:click="deleteEntry(employee.id, index)">
                            Delete
                        </a>
                    </td>
                </tr>
			</tbody>
			</table>
		</div>
	</div>
 </div>
</div>
</template>

<script>
    export default {
        data: function () {
            return {
                employees: [],
                printing: false
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/cugs')
                .then(function (resp) {
                    app.employees = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load employees");
                });
        },
        methods: {
            deleteEntry(Employee_id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/cugs/' + Employee_id)
                        .then(function (resp) {
                            app.employees.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete employee");
                        });
                }
            },
            print() {
                this.$htmlToPaper('print');
                }
        }
    }
</script>
