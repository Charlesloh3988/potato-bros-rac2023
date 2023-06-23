function turn_right () {
    reromicro.RunMotor(Motors.Left, 50)
    reromicro.RunMotor(Motors.Right, 5)
}
function turn_left () {
    reromicro.RunMotor(Motors.Right, 50)
    reromicro.RunMotor(Motors.Left, 5)
}
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.ReadUltrasonic() <= 15) {
        reromicro.Brake()
    } else {
        if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            turn_left()
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            turn_right()
        } else {
            reromicro.Brake()
        }
    }
})
