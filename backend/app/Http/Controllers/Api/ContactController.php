<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\ContactService;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function __construct(protected ContactService $service) {}

    public function index()
    {
        return response()->json($this->service->getAll());
    }

    public function show($id)
    {
        return response()->json($this->service->getById($id));
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        try {
            $contact = $this->service->create($validated);
            return response()->json($contact, 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => '登録処理中にエラーが発生しました。',
                'message' => $e->getMessage()
            ], 500);
        }

    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        try {
            $contact = $this->service->update($id, $validated);
            return response()->json($contact, 201);
        } catch (\Exception $e) {
            return response()->json([
                'error' => '登録処理中にエラーが発生しました。',
                'message' => $e->getMessage()
            ], 500);
        }

    }

    public function destroy($id)
    {
        $this->service->delete($id);
        return response()->json(['message' => '削除しました']);
    }
}
