<?php
    $id = $_POST['id']; 
    $password = $_POST['password']; 
    $phone = $_POST['phone']; 
    $email = $_POST['email']; 
    $gender = $_POST['gender']; 
    $jumin1 = $_POST['jumin1']; 
    $jumin2 = $_POST['jumin2']; 
    $adress1 = $_POST['adress1']; 
    $adress2 = $_POST['adress2']; 
    $adress3 = $_POST['adress3']; 
    $adress4 = $_POST['adress4']; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            list-style: none;
            text-decoration: none;
        }

        body {
            width: 500px;
            margin: 0 auto;
            text-align: center;
        }

        h2 {
            margin-top: 100px;
        }

        ul {
            width: 400px;
            margin: 0 auto;
        }

        li {
            margin: 20px 0;
            font-size: 18px;
            font-weight: bold;
        }

        li p {
            border: 1px solid #d9d9d9;
            padding: 10px;
            font-size: 16px;
            font-weight: normal;
        }

        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 400px;
            height: 50px;
            background-color: coral;
            margin: 10px auto 100px auto;
            border: 0;
            cursor: pointer;
            color: #fff;
            font-size: 18px;
            border-radius: 5px;
        }

    </style>
</head>
<body>
    <h2>회원 정보</h2>
    <ul>
        <li>
            아이디 
            <p><?php echo $id ?></p>
        </li>
        <li>
            비밀번호 
            <p><?php echo $password ?></p>
        </li>
        <li>
            핸드폰번호
            <p><?php echo $phone ?> </p>
        </li>
        <li>
            이메일
            <p><?php echo $email ?> </p>
        </li>
        <li>
            성별
            <p><?php echo $gender ?> </p>
        </li>
        <li>
            주민등록번호
            <p><?php echo $jumin1 ?>-<?php echo $jumin2 ?> </p>
        </li>
        <li>
            주소
            <p><?php echo $adress1 ?> <?php echo $adress2 ?> <?php echo $adress3 ?> </p>
        </li>
    </ul>
    <a href="index.html">수정하기</a>
</body>
</html>