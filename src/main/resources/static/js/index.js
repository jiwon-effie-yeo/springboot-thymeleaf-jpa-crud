document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems);
});

index = {
    save : function () {
        var hero = {
            name: $('#createName').val(),
            age: $('#createAge').val(),
            memo: $('#createMemo').val()
        };

        $.ajax({
            url: '/save',
            type: 'post',
            data: JSON.stringify(hero),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (id) {
            alert(id);
            location.reload();
        }).fail(function () {
            alert('Please try again');
        });
    },
    findById : function (id) {
        $.ajax({
            url:'/find',
            type:'post',
            data: JSON.stringify(id),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function (hero) {
            $('#updateModal').data('id', id);
            $('#updateName').val(hero.name);
            $('#updateAge').val(hero.age);
            $('#updateMemo').val(hero.memo);
        }).fail(function () {
            alert('Please try again');
        })
    },
    update : function (){
        var hero = {
            id: $('#updateModal').data('id'),
            name : $('#updateName').val(),
            age : $('#updateAge').val(),
            memo : $('#updateMemo').val()
        };

        $.ajax({
            url: '/update',
            type: 'put',
            data: JSON
                .stringify(hero),
            dataYpe:'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            location.reload();
        }).fail(function () {
            alert('Please try again');
        });
    },
    deleteById : function (id) {
        $.ajax({
            url: '/delete',
            type: 'delete',
            data: JSON.stringify(id),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8'
        }).done(function () {
            location.reload();
        }).fail(function () {
            alert("please try again");
        })
    }
};

function save() {
    index.save();
}

function findById(id) {
    index.findById(id);
}

function update() {
    index.update();
}

function deleteById(id) {
    index.deleteById(id);
}
