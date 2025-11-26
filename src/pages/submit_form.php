<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);

$conn = new mysqli('localhost', 'YOUR_DB_USERNAME', 'YOUR_DB_PASSWORD', 'YOUR_DB_NAME');

if ($conn->connect_error) {
    echo json_encode(['success' => false, 'error' => 'Database connection failed']);
    exit;
}

$stmt = $conn->prepare("INSERT INTO contact_form (name, company, email, country_code, contact, service_area, contact_method, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param(
    "ssssssss",
    $data['name'],
    $data['company'],
    $data['email'],
    $data['countryCode'],
    $data['contact'],
    $data['serviceArea'],
    $data['contactMethod'],
    $data['description']
);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Insert failed']);
}

$stmt->close();
$conn->close();
?>
