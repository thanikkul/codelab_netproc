$(document).ready(function () {
    var socket = io('http://localhost:3000');
    socket.on('hi', function(msg) {
      Swal.fire({
        title: 'Success!',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then((result) => {
        if (result.isConfirmed) {
          socket.on("random", (data) => {
            AppendData(data);
          });
        } 
      })
    });
    $('#btnSendMsg').click( function(){
      // url from where we want to get the data
       console.log("SendMsg");
  
       data_input = { "msg": $('#txtMessage').val(), "name": $('#txtName').val()};
  
       socket.emit('joidRoom', data_input, function (data) {
              console.log('sent message to server!');
              console.log(data);
              //
              Swal.fire({
                  title: 'ขอบคุณที่บอกฉัน',
                  text: data,
              })
      });
    });
  });
  
  
  
  function AppendData(val){
    $("#listUser").append('<a href="#" class="list-group-item list-group-item-action"> Random : '+ val +'</a>');
  }
  //Work exercise,Insert code here