<script>
</script>

<template>
    <section id="book-form">
        <div class="container">
            <form @submit.prevent action="#" class="d-flex justify-content-center align-items-center">
                <div class="input-group">
                    <input class="form-control" type="text" name="number" id="number" placeholder="1 Person">
                    <span class="input-group-text" id="basic-addon1">
                        <font-awesome-icon :icon="['fas', 'user-group']" />
                    </span>
                </div>
                <h4 class="ms-3">FOR</h4>
                <input class="form-control middle-input" type="date" name="date" id="date">
                <h4 class="me-3">AT</h4>
                <div class="input-group">
                    <input class="form-control" type="text" name="hour" id="hour" placeholder="7:00 pm">
                    <span class="input-group-text" id="basic-addon1">
                        <font-awesome-icon :icon="['fas', 'stopwatch']" />
                    </span>
                </div>
                <button class="btn" type="submit">BOOK A TABLE</button>
            </form>
        </div>
    </section>
</template>

<style scoped>
#book-form {
    background-image: url('../assets/img/h3-background-img-3.jpg');
    background-size: contain;
    background-position: center;
    padding: 80px 0;
    margin: 10px 0;
}

.btn:hover {
    color: white;
}

h4 {
    color: white;
}

.input-group-text {
    color: #b7903c
}

.btn {
    width: 500px;
    margin-left: 25px;
}

.middle-input,
.input-group input {
    height: 47px;
    border-radius: 0;
}

.input-group input {
    border-right: none;
}

.middle-input {
    margin: 0 18px;
}

span {
    background-color: white;
    border-left: none;
    border-radius: 0;
}
</style>