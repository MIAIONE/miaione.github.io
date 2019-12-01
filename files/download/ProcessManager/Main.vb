Imports System.Console
Module Main
    ''' <summary>
    ''' 外部调用示例
    ''' </summary>
    Sub Main()
        On Error Resume Next
        If Command() <> Nothing Then
            Dim Newr = Replace(Command().ToUpper, ".EXE", "").Trim
            If ProcessCheck(Newr) > 0 Then
                KillProcess(Newr)
            End If
        Else
            Do
                WriteLine("Please Enter Process Name : ")
                Dim Readthing As String
                Readthing = ReadLine()
                If ProcessCheck(Readthing) > 0 Then
                    KillProcess(Readthing)
                End If
            Loop
        End If
    End Sub
    Public Function ProcessCheck(ByVal ProcessName As String) As Integer
        On Error Resume Next
        Dim Apps As String = ProcessName.ToUpper.Replace(".EXE", "").Trim
        Return Process.GetProcessesByName(Apps).Length
    End Function

    Public Function KillProcess(ByVal ProcessNameObject As String)
        On Error Resume Next
        Dim ProcessListes = Process.GetProcessesByName(ProcessNameObject)
        For Each TEMProcess As Process In ProcessListes
            TEMProcess.Kill()
        Next
        Return Nothing
    End Function
End Module
