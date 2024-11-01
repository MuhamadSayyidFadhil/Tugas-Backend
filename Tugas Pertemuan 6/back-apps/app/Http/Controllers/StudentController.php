<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    public function index() {
        $student = Student::all();
        
        if ($student->isEmpty()) {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        } else {
            $data = [
                'message' => 'Berhasil mengakses data',
                'data' => $student
            ];
            return response()->json($data, 200);
        }
    }

    public function store(Request $request) {
        if ($request->has(['nama', 'nim', 'email', 'jurusan'])) {
            $input = [
                'nama' => $request->nama,
                'nim' => $request->nim,
                'email' => $request->email,
                'jurusan' => $request->jurusan,
            ];
            $student = Student::create($input);
            $data = [
                'message' => 'Data berhasil ditambahkan',
                'data' => $student
            ];
            return response()->json($data, 201);
        } else {
            return response()->json(['message' => 'Data tidak lengkap'], 400);
        }
    }

    public function update(Request $request, $id) {
        $student = Student::find($id);
    
        if ($student) {
            if ($request->has(['nama', 'nim', 'email', 'jurusan'])) {
                $student->update([
                    'nama' => $request->nama,
                    'nim' => $request->nim,
                    'email' => $request->email,
                    'jurusan' => $request->jurusan,
                ]);
                $data = [
                    'message' => 'Data berhasil diperbarui',
                    'data' => $student
                ];
                return response()->json($data, 200);
            } 
        } else {
            $data = [
                'message' => 'Data tidak ditemukan'
            ];
            return response()->json($data, 404);
        }
    }
    

    public function destroy($id) {
        $student = Student::find($id);
    
        if ($student) {
            $student->delete();
            $data = [
                'message' => 'Student berhasil dihapus'
            ];
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student tidak ditemukan'
            ];
            return response()->json($data, 404);
        }
    }
    
}
