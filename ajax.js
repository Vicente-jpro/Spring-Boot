<script type="text/javascript">
		/* 
		 //Saving data using ajax
     /*student.java
		 
		 classe Strundet{
		 private Long id ;
		 private String name;
		 private String phoneNumber; 
		}
		 */
  
  // <button onclick="saveStudent()">Save</button>
		function saveStudent(){
			 var id = $('#id').val();
			 var name = $('#name').val();
			 var phoneNumber = $('#phoneNumber').val();
			 
			 
			 // Saving using ajax
			 $.ajax({
				method: "POST",
				url: "/student/add", //localhost:8080/student/add
				data: JSON.stringify(
					{ 
						id: id,
						name: name,
						phoneNumber: phoneNumber
					}
				),
				contentType: "application/json; charset=utf-8",
				success: function (response){
					alert("Successfully created!");
				}
			 }).fail( function (xhr, status, errorThrown){
				   alert("Error. It was not possible created:"+xhr.responseText );
			 } );
		 
		 }
		</script>
