<?php
include "db.php";

$id = $_GET['id'];

$result = mysqli_query($conn, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if (isset($_POST['update'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    mysqli_query($conn, "UPDATE student SET
        name='$name',
        email='$email',
        mobile='$mobile',
        department='$department'
        WHERE id=$id");

    header("Location: index.php");
}
?>

<form method="POST">
    Name: <input type="text" name="name" value="<?= $row['name'] ?>"><br><br>
    Email: <input type="email" name="email" value="<?= $row['email'] ?>"><br><br>
    Mobile: <input type="text" name="mobile" value="<?= $row['mobile'] ?>"><br><br>
    Department: <input type="text" name="department" value="<?= $row['department'] ?>"><br><br>
    <button type="submit" name="update">Update</button>
</form>
