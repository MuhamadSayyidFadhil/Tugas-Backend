<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index() {
        $employees = Employee::all();
        if ($employees->isEmpty()) {
            return response()->json([
                'message' => 'Data kosong'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Semua data berhasil diambil',
                'data' => $employees
            ], 200);
        }
    }

    public function store(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:10',
            'phone' => 'required|string|max:15',
            'address' => 'required|string|max:255',
            'email' => 'required|email|unique:employees,email',
            'status' => 'required|string',
            'hired_on' => 'required|date',
        ]);
    
        $employee = Employee::create($validatedData);
    
        return response()->json([
            'message' => 'Data berhasil ditambahkan',
            'data' => $employee
        ], 201);
    }
    
    public function show($id) {
        $employee = Employee::find($id);
        if ($employee) {
            return response()->json([
                'message' => 'Semua data berhasil diambil',
                'data' => $employee
            ], 200);
        } else {
            return response()->json([
                'message' => 'Data tidak ditemukan'
            ], 404);
        }
    }

    public function update(Request $request, $id) {
        $employee = Employee::find($id);
    
        if ($employee) {
            if ($request->has(['name', 'gender', 'phone', 'address', 'email', 'status', 'hired_on'])) {
                $employee->update([
                    'name' => $request->name,
                    'gender' => $request->gender,
                    'phone' => $request->phone,
                    'address' => $request->address,
                    'email' => $request->email,
                    'status' => $request->status,
                    'hired_on' => $request->hired_on,
                ]);
                $data = [
                    'message' => 'Data berhasil diperbarui',
                    'data' => $employee
                ];
                return response()->json($data, 200);
            } else {
                return response()->json(['message' => 'Data tidak lengkap'], 400);
            }
        } else {
            return response()->json(['message' => 'Data tidak ditemukan'], 404);
        }
    }

    public function destroy($id) {
        $employee = Employee::find($id);
    
        if ($employee) {
            $employee->delete();
            $data = [
                'message' => 'Data berhasil di delete'
            ];
            return response()->json($data, 200);
        } else {
            return response()->json(['message' => 'Data tidak di temukan'], 404);
        }
    }
    
}
