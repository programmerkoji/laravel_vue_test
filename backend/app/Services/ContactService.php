<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\Contact;
use App\Repositories\Interfaces\ContactRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ContactService
{
    public function __construct(
        protected ContactRepositoryInterface $contactRepository
    ) {}

    public function getAll(): Collection
    {
        return $this->contactRepository->all();
    }

    public function getById(int $id): Contact
    {
        return $this->contactRepository->find($id);
    }

    public function create(array $data): Contact
    {
        DB::beginTransaction();

        try {
            $contact = $this->contactRepository->create($data);
            DB::commit();
            return $contact;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('登録失敗: ' . $e->getMessage());
            throw $e;
        }
    }

    public function update(int $id, array $data): Contact
    {
        DB::beginTransaction();

        try {
            $contact = $this->contactRepository->update($id, $data);
            DB::commit();
            return $contact;
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('更新失敗: ' . $e->getMessage());
            throw $e;
        }
    }

    public function delete(int $id): bool
    {
        return $this->contactRepository->delete($id);
    }
}
